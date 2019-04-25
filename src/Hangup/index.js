import React from 'react';
import Icon from '../common/components/Icon';
import { Container, HeaderBar } from '../Analysis/index.styled';
import * as styled from './index.styled';

import { mockOrderList } from '../common/mock/products';

function Hangup() {
  const productList = mockOrderList;

  return (
    <Container>
      <HeaderBar>未完成支付的账单</HeaderBar>
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

        {/* <styled.Card>
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
        </styled.Card> */}

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

export default Hangup;
