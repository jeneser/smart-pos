import React from 'react';
import Icon from '../common/components/Icon';
import * as styled from './index.styled';

import { mockOrderList } from '../common/mock/products';

function Hangup() {
  const productList = mockOrderList;

  return (
    <styled.Wrapper>
      <styled.Row>
        <styled.Card>
          <styled.CardHead>金额 ￥332.00</styled.CardHead>
          <styled.CardBody>
            {productList.map((item, index) => {
              return (
                <styled.ListItem key={item.itemId}>
                  <styled.Image src={item.itemPic} />

                  <styled.ItemInfo>
                    <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                    <styled.ItemDesc>{item.itemDesc}</styled.ItemDesc>
                  </styled.ItemInfo>

                  <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                </styled.ListItem>
              );
            })}
          </styled.CardBody>
          <styled.CardFoot>
            <styled.Button warn>删除</styled.Button>
            <styled.Button primary>选择</styled.Button>
            <styled.Button primary>结算</styled.Button>
          </styled.CardFoot>
        </styled.Card>
        <styled.Card>
          <styled.CardHead>金额 ￥332.00</styled.CardHead>
          <styled.CardBody>
            {productList.map((item, index) => {
              return (
                <styled.ListItem key={item.itemId}>
                  <styled.Image src={item.itemPic} />

                  <styled.ItemInfo>
                    <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                    <styled.ItemDesc>{item.itemDesc}</styled.ItemDesc>
                  </styled.ItemInfo>

                  <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                </styled.ListItem>
              );
            })}
          </styled.CardBody>
          <styled.CardFoot>
            <styled.Button warn>删除</styled.Button>
            <styled.Button primary>选择</styled.Button>
            <styled.Button primary>结算</styled.Button>
          </styled.CardFoot>
        </styled.Card>
      </styled.Row>
    </styled.Wrapper>
  );
}

export default Hangup;
