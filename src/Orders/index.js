import React, { Fragment, useState, useEffect, useCallback } from 'react';
import Icon from '../common/components/Icon';
import request from '../common/api/request';
import moment from 'moment';
import get from 'lodash.get';
import { toast, Toastify } from '../common/components/Toastify';

import * as styled from './index.styled';

/**
 * 历史账单
 */
function Orders() {
  const [ordersList, setOrdersList] = useState([]);
  const [orderId, setOrderId] = useState('');
  const [orderDetail, setOrderDetail] = useState({});
  // 搜索框
  const [searchBarIsShow, setSearchBarIsShow] = useState(false);
  // 查询 id
  const [queryItemId, setQueryItemId] = useState('');

  useEffect(() => {
    /**
     * 获取数据
     */
    const fetchData = async () => {
      try {
        const url = `/orders`;
        const result = (await request({ url })) || [];

        setOrdersList(result);

        setOrderId(get(result, '[0].orderId', ''));
      } catch (e) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    /**
     * 获取数据
     */
    const fetchData = async () => {
      if (!orderId) return;

      try {
        const url = `/orders/${orderId}`;

        setOrderDetail((await request({ url }))[0] || {});
      } catch (e) {}
    };

    fetchData();
  }, [orderId]);

  /**
   * 查询单个商品
   */
  const querySingleOrder = useCallback(() => {
    const fetchData = async () => {
      if (!queryItemId) return;

      try {
        const url = `/orders/${queryItemId}`;

        setOrderDetail((await request({ url }))[0] || {});
      } catch (e) {
        toast.warn('账单不存在！');
      }
    };

    fetchData();

    setSearchBarIsShow(false);
    setQueryItemId('');
  }, [queryItemId]);

  const collectedOrders =
    ordersList.reduce((acc, cur) => {
      const payTime = moment(cur.payTime).format('YYYY-MM-DD');

      if (!acc[payTime]) acc[payTime] = [];

      acc[payTime].push(cur);

      return acc;
    }, {}) || {};

  const orderlyOrders = Object.keys(collectedOrders).map((item) => {
    return {
      date: item,
      list: collectedOrders[item]
    };
  });

  return (
    <styled.Orders>
      <styled.Main>
        {/* head */}
        <styled.Head>
          <styled.Title>账单详情</styled.Title>
        </styled.Head>
        <styled.MainBody>
          <styled.Row flexEnd>
            <styled.LeftBlock>
              <styled.ValueText>{orderDetail.payUser}</styled.ValueText>
              <styled.LabelText marginBottom="0.06">
                导购员: {orderDetail.cashier}
              </styled.LabelText>
            </styled.LeftBlock>
            <styled.RightBlock>
              <styled.Amount>￥{orderDetail.payAmount}</styled.Amount>
              <styled.LabelText>
                id: {orderDetail.orderId}
                <styled.Tag>{orderDetail.payStatus}</styled.Tag>
              </styled.LabelText>
            </styled.RightBlock>
          </styled.Row>
          <styled.ProductList>
            {orderDetail.items &&
              orderDetail.items.map((item, index) => {
                return (
                  <styled.ListItem key={String(index)}>
                    <styled.Image src={item.itemPic} />
                    {/* ItemInfo */}
                    <styled.ItemInfo>
                      <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                      <styled.ItemDesc>{item.itemDesc}</styled.ItemDesc>
                    </styled.ItemInfo>
                    {/* ItemCount */}
                    <styled.ItemCount>1</styled.ItemCount>
                    {/* PriceWrapper */}
                    <styled.PriceWrapper>
                      <styled.ItemPrice>{item.itemPrice}</styled.ItemPrice>
                      <styled.ItemOriginPrice>
                        {item.itemPrice}
                      </styled.ItemOriginPrice>
                    </styled.PriceWrapper>
                  </styled.ListItem>
                );
              })}
          </styled.ProductList>

          {/* SettleList */}
          <styled.SettleList>
            <styled.SettleItem>
              <styled.TextLabel>总优惠</styled.TextLabel>
              {orderDetail.discountAmount}
            </styled.SettleItem>
            <styled.SettleItem>
              <styled.TextLabel>扣除税</styled.TextLabel>
              {orderDetail.taxAmount}
            </styled.SettleItem>
          </styled.SettleList>

          <styled.Row>
            <styled.Button>打印小票</styled.Button>
            <styled.Button>导出账单</styled.Button>
          </styled.Row>
        </styled.MainBody>
      </styled.Main>

      <styled.Aside>
        {/* head */}
        <styled.Head>
          {searchBarIsShow ? (
            <styled.searchBar>
              <styled.searchInput
                value={queryItemId}
                autoFocus
                placeholder="输入账单id"
                onChange={(e) => setQueryItemId(e.target.value)}
              />
              <styled.searchButton onClick={querySingleOrder}>
                查询
              </styled.searchButton>
            </styled.searchBar>
          ) : (
            <Fragment>
              <Icon
                name="icon_search_black"
                width="0.22"
                height="0.22"
                onClick={() => setSearchBarIsShow(!searchBarIsShow)}
              />
              <styled.Title>账单</styled.Title>
              <Icon name="icon_more_black" width="0.22" height="0.22" />
            </Fragment>
          )}
        </styled.Head>
        <styled.AsideBody>
          <styled.List>
            {orderlyOrders.map((order) => {
              return (
                <Fragment key={order.date}>
                  <styled.ListHead>{order.date}</styled.ListHead>

                  {order.list.map((item) => {
                    return (
                      <styled.OrderListItem
                        key={item.orderId}
                        onClick={() => setOrderId(item.orderId)}
                      >
                        <styled.LeftBlock>
                          <styled.ValueText>
                            {moment(item.payTime).format('MM-DD hh:mm a')}
                          </styled.ValueText>
                          <styled.LabelText>
                            {item.orderId} - {item.payStatus}
                          </styled.LabelText>
                        </styled.LeftBlock>
                        <styled.RightBlock>
                          <styled.ValueText>
                            <Icon
                              name="icon_money_gray"
                              width="0.22"
                              height="0.22"
                            />
                            ￥{item.payAmount}
                          </styled.ValueText>
                          <styled.LabelText>{item.cashier}</styled.LabelText>
                        </styled.RightBlock>
                      </styled.OrderListItem>
                    );
                  })}
                </Fragment>
              );
            })}
          </styled.List>
        </styled.AsideBody>
      </styled.Aside>
      <Toastify />
    </styled.Orders>
  );
}

export default Orders;
