import React from 'react';
import Icon from '../common/components/Icon';
import * as styled from './index.styled';

import { mockOrderList, mockDiscountList } from '../common/mock/products';

function SaleBlock() {
  const saleList = mockOrderList;
  const discountList = mockDiscountList;

  return (
    <styled.SaleBlock>
      <styled.Wrapper>
        {/* head */}
        <styled.Head>
          <styled.Title>当前订单</styled.Title>
          <Icon name="icon_more_c_black" width="0.32" height="0.32" />
        </styled.Head>
        {/* List */}
        <styled.List>
          {saleList.map((item) => {
            return (
              <styled.ListItem key={item.itemId}>
                <styled.Image src={item.itemPic} />

                <styled.ItemInfo>
                  <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
                  <styled.ItemDesc>{item.itemDesc}</styled.ItemDesc>
                </styled.ItemInfo>

                <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
                <styled.IconDelete
                  name="icon_error_black"
                  width="0.2"
                  height="0.2"
                />
              </styled.ListItem>
            );
          })}
          {discountList.map((item, index) => {
            return (
              <styled.ListItem borderTop={index === 0} key={item.discountId}>
                <styled.Image src={item.picture} />

                <styled.ItemInfo>
                  <styled.ItemTitle>{item.title}</styled.ItemTitle>
                  <styled.ItemDesc>{item.discountDesc}</styled.ItemDesc>
                </styled.ItemInfo>

                <styled.ItemPrice>
                  {item.discountRate || item.amount}
                </styled.ItemPrice>
                <styled.IconDelete
                  name="icon_error_black"
                  width="0.2"
                  height="0.2"
                />
              </styled.ListItem>
            );
          })}
        </styled.List>
        {/* foot */}
        <styled.Foot>结算 ￥198.00</styled.Foot>
      </styled.Wrapper>
    </styled.SaleBlock>
  );
}

export default SaleBlock;
