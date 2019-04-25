import React from 'react';
import Icon from '../common/components/Icon';
import { Container, HeaderBar } from '../Analysis/index.styled';
import * as styled from './index.styled';

import { mockBills } from '../common/mock/bills';
import { mockOrderList } from '../common/mock/products';


function Bills() {
  const productList = mockOrderList;

  return (
    <Container>
      <HeaderBar>历史账单查询</HeaderBar>
      {/* <styled.Table>
        <styled.TableHead>
          <styled.TableHeadCell>订单ID</styled.TableHeadCell>
          <styled.TableHeadCell>交易金额</styled.TableHeadCell>
          <styled.TableHeadCell>交易时间</styled.TableHeadCell>
          <styled.TableHeadCell>提货方式</styled.TableHeadCell>
          <styled.TableHeadCell>支付状态</styled.TableHeadCell>
        </styled.TableHead>
        <styled.TableBody>
          {billsList.map((item) => {
            return (
              <styled.TableRow key={item.billId}>
                <styled.TableCell>{item.billId}</styled.TableCell>
                <styled.TableCell>￥{item.payAmount}</styled.TableCell>
                <styled.TableCell>{item.payTime}</styled.TableCell>
                <styled.TableCell>{item.shipType}</styled.TableCell>
                <styled.TableCell>
                  <Icon name="icon_success_g" width="0.22" height="0.22" />
                </styled.TableCell>
              </styled.TableRow>
            );
          })}
        </styled.TableBody>
        <styled.TableFoot>
          <styled.Button>加载更多</styled.Button>
        </styled.TableFoot>
      </styled.Table> */}
      <styled.Row>
        <styled.Card>
          <styled.CardHead>
            <Icon name="icon_recharge_black" width="0.22" height="0.22" />
            <styled.Text>金额 ￥332.00</styled.Text>
            <Icon name="icon_delete_red" width="0.22" height="0.22" />
          </styled.CardHead>
          <styled.CardBody>
            {productList.map((item, index) => {
              return (
                <styled.ListItem key={item.itemId} borderTop>
                  <Icon name="icon_tag_black" width="0.22" height="0.22" />
                  <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                  <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                </styled.ListItem>
              );
            })}
          </styled.CardBody>
        </styled.Card>

        <styled.Card>
          <styled.CardHead>
            <Icon name="icon_recharge_black" width="0.22" height="0.22" />
            <styled.Text>金额 ￥332.00</styled.Text>
            <Icon name="icon_delete_red" width="0.22" height="0.22" />
          </styled.CardHead>
          <styled.CardBody>
            {productList.map((item, index) => {
              return (
                <styled.ListItem key={item.itemId} borderTop>
                  <Icon name="icon_tag_black" width="0.22" height="0.22" />
                  <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                  <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                </styled.ListItem>
              );
            })}
          </styled.CardBody>
        </styled.Card>

        {/* <styled.Card>
          <styled.CardHead>
            <Icon name="icon_recharge_black" width="0.22" height="0.22" />
            <styled.Text>金额 ￥332.00</styled.Text>
            <Icon name="icon_delete_red" width="0.22" height="0.22" />
          </styled.CardHead>
          <styled.CardBody>
            {productList.map((item, index) => {
              return (
                <styled.ListItem key={item.itemId} borderBottom>
                  <Icon name="icon_tag_black" width="0.22" height="0.22" />
                  <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                  <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                </styled.ListItem>
              );
            })}
          </styled.CardBody>
        </styled.Card> */}
      </styled.Row>
    </Container>
  );
}

export default Bills;
