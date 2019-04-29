import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import Modal from 'react-modal';
import get from 'lodash.get';
import findindex from 'lodash.findindex';
import uuidv1 from 'uuid/v1';
import moment from 'moment';

import Icon from '../common/components/Icon';

import * as styled from './index.styled';
import * as commonStyle from '../common/styles/common';

Modal.setAppElement('#root');

/**
 * 顾客账单
 * @param  {{leftButton: JSX.Element}} {}
 */
function SaleBlock({ leftButton }) {
  // modal state
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [customer, setCustomer] = useState({});

  // map state
  const {
    customerList,
    currentCustomer,
    cartItems,
    discounts
  } = useMappedState(
    useCallback((state) => {
      // current customer
      const currentCustomer = get(state, 'currentCustomer', {});
      const currentCustomerIndex = findindex(get(state, 'cart', []), [
        'id',
        currentCustomer.id
      ]);

      // current cart
      const currentCart = get(state, `cart[${currentCustomerIndex}]`, {
        items: [],
        discounts: []
      });

      // current customer items
      const cartItems = currentCart.items;

      // discounts
      const discounts = currentCart.discounts;

      return {
        customerList: get(state, 'customer', []),
        currentCustomer,
        cartItems,
        discounts
      };
    }, [])
  );

  // actions
  const dispatch = useDispatch();

  // 设置当前顾客/账单
  const setCurrentCustomer = useCallback(() => {
    dispatch({
      type: 'SET_CURRENT_CUSTOMER',
      value: customer
    });
  }, [customer]);

  // 添加顾客/账单
  const addCustomer = useCallback(() => {
    const newCustomer = {
      id: uuidv1(),
      name: '自定义账单',
      info: moment().format('hh:mm:ss a')
    };

    dispatch({
      type: 'ADD_CUSTOMER',
      value: newCustomer
    });

    setCustomer(newCustomer);

    setModalIsOpen(false);
  }, []);

  useEffect(() => {
    setCurrentCustomer();
    setModalIsOpen(false);
  }, [customer]);

  const taxRate = 0;

  const discountAmount = discounts.reduce(
    (acc, cur) => acc + parseFloat(cur.amount || 0),
    0
  );
  const amount = cartItems.reduce(
    (acc, cur) => acc + parseFloat(cur.itemPrice || 0, 2),
    0
  );

  // realAmount = (amount - discountAmount) * (1 - taxRate)
  const realAmount = (
    (amount - discountAmount >= 0 ? amount - discountAmount : 0) *
    (1 - taxRate)
  ).toFixed(2);

  console.log(customerList);

  return (
    <Fragment>
      <styled.SaleBlock>
        {/* head */}
        <styled.Head>
          {leftButton ? (
            leftButton
          ) : (
            <Icon name="icon_delete_black" width="0.22" height="0.22" />
          )}
          <styled.Title>账单</styled.Title>
          <Icon name="icon_more_black" width="0.22" height="0.22" />
        </styled.Head>

        {/* body */}
        <styled.Body>
          {/* Customer */}
          <styled.Customer onClick={() => setModalIsOpen(true)}>
            <Icon name="icon_user_c_gray" width="0.2" height="0.2" />
            <styled.CustomerId>
              {currentCustomer.name ? `${currentCustomer.name}` : '添加账单'}
            </styled.CustomerId>
            <styled.EnhanceIcon
              name="icon_add_c_gray"
              width="0.2"
              height="0.2"
            />
          </styled.Customer>

          {/* ProductList */}
          <styled.ProductList>
            {cartItems.map((item) => {
              return (
                <styled.ListItem key={item.itemId}>
                  <styled.Image src={item.itemPic} />
                  {/* ItemInfo */}
                  <styled.ItemInfo>
                    <styled.ItemTitle>{item.shortTitle}</styled.ItemTitle>
                    <styled.ItemDesc>
                      {item.itemSize} {item.itemColor}
                    </styled.ItemDesc>
                  </styled.ItemInfo>
                  {/* ItemCount */}
                  {/* <styled.ItemCount>2</styled.ItemCount> */}
                  {/* PriceWrapper */}
                  <styled.PriceWrapper>
                    <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                    <styled.ItemOriginPrice>
                      {item.originalPrice}
                    </styled.ItemOriginPrice>
                  </styled.PriceWrapper>
                </styled.ListItem>
              );
            })}
          </styled.ProductList>

          {!cartItems.length && <styled.Empty>扫码或从左侧添加商品</styled.Empty>}

          {/* Settlement */}
          <styled.Settlement>
            {/* SettleList */}
            <styled.SettleList>
              <styled.SettleItem primary>
                <styled.TextLabel>添加优惠折扣</styled.TextLabel>
                <styled.EnhanceIcon
                  name="icon_add_c_gray"
                  width="0.2"
                  height="0.2"
                />
              </styled.SettleItem>
              <styled.SettleItem>
                <styled.TextLabel>总优惠</styled.TextLabel>-{discountAmount}
              </styled.SettleItem>
              <styled.SettleItem>
                <styled.TextLabel>扣除税</styled.TextLabel>
                {taxRate}%
              </styled.SettleItem>
            </styled.SettleList>
            {/* Amount */}
            <styled.Amount>
              <styled.TextLabel>总计</styled.TextLabel>
              {realAmount}
            </styled.Amount>
          </styled.Settlement>
        </styled.Body>
      </styled.SaleBlock>

      <Modal
        isOpen={modalIsOpen}
        style={{ ...commonStyle.modalStyle }}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <styled.CustomerList>
          <styled.Button onClick={addCustomer}>快速新建账单</styled.Button>

          {customerList.map((item) => {
            return (
              <styled.CustomerItem
                key={item.id}
                onClick={() => setCustomer(item)}
              >
                <styled.Avatar />
                <styled.Desc>
                  <styled.Text>{item.name}</styled.Text>
                  <styled.CustomerInfo>{item.info}</styled.CustomerInfo>
                </styled.Desc>
              </styled.CustomerItem>
            );
          })}
        </styled.CustomerList>
      </Modal>
    </Fragment>
  );
}

export default SaleBlock;
