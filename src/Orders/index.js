import React, { Fragment } from 'react';
import Icon from '../common/components/Icon';

import * as styled from './index.styled';

import { mockBills } from '../common/mock/bills';
import { mockOrderList } from '../common/mock/products';

/**
 * 历史账单
 */
function Orders() {
  const orderList = mockBills;
  const saleList = mockOrderList;

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
              <styled.ValueText>jeneser</styled.ValueText>
              <styled.LabelText marginBottom="0.06">
                导购员: jeneserwang
              </styled.LabelText>
            </styled.LeftBlock>
            <styled.RightBlock>
              <styled.Amount>￥468.00</styled.Amount>
              <styled.LabelText>
                id: 123748598798<styled.Tag>支付成功</styled.Tag>
              </styled.LabelText>
            </styled.RightBlock>
          </styled.Row>
          <styled.ProductList>
            {saleList.map((item) => {
              return (
                <styled.ListItem key={item.itemId}>
                  <styled.Image src={item.itemPic} />
                  {/* ItemInfo */}
                  <styled.ItemInfo>
                    <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                    <styled.ItemDesc>{item.itemDesc}</styled.ItemDesc>
                  </styled.ItemInfo>
                  {/* ItemCount */}
                  <styled.ItemCount>2</styled.ItemCount>
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
              <styled.TextLabel>总优惠</styled.TextLabel>330
            </styled.SettleItem>
            <styled.SettleItem>
              <styled.TextLabel>扣除税</styled.TextLabel>10
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
          <Icon name="icon_search_black" width="0.22" height="0.22" />
          <styled.Title>账单</styled.Title>
          <Icon name="icon_more_black" width="0.22" height="0.22" />
        </styled.Head>
        <styled.AsideBody>
          <styled.List>
            {orderList.map((order) => {
              return (
                <Fragment key={order.date}>
                  <styled.ListHead>{order.date}</styled.ListHead>

                  {order.list.map((item) => {
                    return (
                      <styled.OrderListItem key={item.orderId}>
                        <styled.LeftBlock>
                          <styled.ValueText>{item.payTime}</styled.ValueText>
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
    </styled.Orders>
  );
}

export default Orders;
