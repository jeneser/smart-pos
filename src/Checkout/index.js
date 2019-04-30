import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useMappedState } from 'redux-react-hook';
import qrcode from 'qrcode';
import get from 'lodash.get';
import find from 'lodash.find';
import Icon from '../common/components/Icon';
import SaleBlock from '../SaleBlock';
import { createBrowserHistory } from 'history';

import * as styled from './index.styled';

const history = createBrowserHistory();

const mockQrImage = require('../common/images/mock_qrcode.png');

/**
 * 结算
 */
function Checkout() {
  const [orderUrl, setOrderUrl] = useState('');
  const [orderQrImage, setOrderQrImage] = useState('');

  // map state
  const {
    customerList,
    currentCustomer,
    currentCustomerId,
    cartItems,
    discounts
  } = useMappedState(
    useCallback((state) => {
      const customerList = get(state, 'customer', []);
      // 当前顾客
      const currentCustomer = find(customerList, ['isCurrent', true]) || {};
      // 当前顾客 ID
      const currentCustomerId = get(currentCustomer, 'id', '');

      // 当前购物车
      const currentCart = get(state, `cart[${currentCustomerId}]`, {});
      // 商品
      const cartItems = get(currentCart, 'items', []);
      // 折扣
      const discounts = get(currentCart, 'discounts', []);

      return {
        customerList,
        currentCustomer,
        currentCustomerId,
        cartItems,
        discounts
      };
    }, [])
  );

  useEffect(() => {
    // 拼接商品参数 ['id_nums']
    const concatProductItems = (items) => {
      const keysObj = {};

      items.forEach((elem) => {
        keysObj[elem.itemId]
          ? keysObj[elem.itemId]++
          : (keysObj[elem.itemId] = 1);
      });

      return Object.keys(keysObj).map((elem) => {
        return `${elem}_${keysObj[elem]}`;
      });
    };

    const params = {
      items: concatProductItems(cartItems)
    };
    console.log(JSON.stringify(params));

    const fetchOrderUrl = async () => {
      const result = await 'https://www.pos.jeneser.wang/orders/10000009678966567';

      setOrderUrl(result);

      try {
        setOrderQrImage(await qrcode.toDataURL(result, { margin: 0 }));
      } catch (err) {
        console.error(err);
      }
    };

    fetchOrderUrl();
  }, [cartItems]);

  // 自定义税率，应从服务器获取，这里固定为 0
  const taxRate = 0;
  // 总折扣
  const discountAmount = discounts.reduce(
    (acc, cur) => acc + parseFloat(cur.amount || 0),
    0
  );
  // 总金额
  const amount = cartItems.reduce(
    (acc, cur) => acc + parseFloat(cur.itemPrice || 0, 2),
    0
  );
  // 实际金额 realAmount = (amount - discountAmount) * (1 - taxRate)
  const realAmount = (
    (amount - discountAmount >= 0 ? amount - discountAmount : 0) *
    (1 - taxRate)
  ).toFixed(2);

  return (
    <styled.Checkout>
      <SaleBlock
        leftButton={
          <Icon
            name="icon_left_black"
            width="0.22"
            height="0.22"
            onClick={() => {
              history.goBack();
            }}
          />
        }
      />

      <styled.Container>
        {/* Head */}
        <styled.Head>
          <styled.Title>结算</styled.Title>
        </styled.Head>

        {/* Body */}
        <styled.Body>
          <styled.Qrbox>
            <styled.QrImage source={orderQrImage} />

            <styled.MessageBox>
              <Icon name="icon_success_white" width="0.32" height="0.32" />
              <styled.Tips>亲，请打开支付宝扫描二维码支付</styled.Tips>
            </styled.MessageBox>
          </styled.Qrbox>
        </styled.Body>

        {/* Foot */}
        <styled.Foot>
          <styled.Row>
            <styled.Col>
              <styled.TextLabel>应付金额</styled.TextLabel>
              <styled.TextValue>￥{realAmount}</styled.TextValue>
            </styled.Col>
            <styled.Col>
              <styled.TextLabel>总计优惠</styled.TextLabel>
              <styled.TextValue primary>￥{discountAmount}</styled.TextValue>
            </styled.Col>
          </styled.Row>
          <styled.Row>
            <styled.Button>支付方式</styled.Button>
            <styled.Button primary>完成支付</styled.Button>
          </styled.Row>
        </styled.Foot>
      </styled.Container>
    </styled.Checkout>
  );
}

export default Checkout;
