import React from 'react';
import Icon from '../common/components/Icon';
import * as styled from './index.styled';

import { mockOrderList, mockDiscountList } from '../common/mock/products';

/**
 * @param  {{leftButton: JSX.Element}} {}
 */
function SaleBlock({ leftButton }) {
  const saleList = mockOrderList;
  const discountList = mockDiscountList;

  return (
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
        <styled.Customer>
          <Icon name="icon_user_c_gray" width="0.2" height="0.2" />
          <styled.CustomerId>顾客1的账单</styled.CustomerId>
          <styled.EnhanceIcon name="icon_add_c_gray" width="0.2" height="0.2" />
        </styled.Customer>
        {/* ProductList */}
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
              <styled.TextLabel>总优惠</styled.TextLabel>330
            </styled.SettleItem>
            <styled.SettleItem>
              <styled.TextLabel>扣除税</styled.TextLabel>10
            </styled.SettleItem>
          </styled.SettleList>
          {/* Amount */}
          <styled.Amount>
            <styled.TextLabel>总计</styled.TextLabel>
            300.00
          </styled.Amount>
        </styled.Settlement>
      </styled.Body>
    </styled.SaleBlock>
  );
}

export default SaleBlock;
