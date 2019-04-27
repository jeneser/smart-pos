import React, { Fragment } from 'react';
import Icon from '../common/components/Icon';

import * as styled from './index.styled';

import { mockBills } from '../common/mock/bills';

function Orders() {
  const orderList = mockBills;

  return (
    <styled.Orders>
      <styled.Main>
        {/* head */}
        <styled.Head>
          <styled.Title>账单详情</styled.Title>
        </styled.Head>
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
                      <styled.ListItem key={item.orderId}>
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
                      </styled.ListItem>
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
