import React from 'react';
import * as styled from './index.styled';

function SaleBlock() {
  return (
    <styled.SaleBlock>
      <styled.Head>当前订单</styled.Head>
      <styled.List>
        <styled.ListItem>
          <styled.ProductDesc>粉色连衣裙</styled.ProductDesc>
          <styled.ProductPrice>$288.00</styled.ProductPrice>
        </styled.ListItem>
        <styled.ListItem>
          <styled.ProductDesc>粉色连衣裙</styled.ProductDesc>
          <styled.ProductPrice>$288.00</styled.ProductPrice>
        </styled.ListItem>
        <styled.ListItem>
          <styled.ProductDesc>粉色连衣裙</styled.ProductDesc>
          <styled.ProductPrice>$288.00</styled.ProductPrice>
        </styled.ListItem>
        <styled.ListItem>
          <styled.ProductDesc>粉色连衣裙</styled.ProductDesc>
          <styled.ProductPrice>$288.00</styled.ProductPrice>
        </styled.ListItem>

        <styled.ListItem borderTop>
          <styled.ProductDesc>优惠折扣</styled.ProductDesc>
          <styled.ProductPrice>-$288.00</styled.ProductPrice>
        </styled.ListItem>
        <styled.ListItem>
          <styled.ProductDesc>配送费用</styled.ProductDesc>
          <styled.ProductPrice>$28.00</styled.ProductPrice>
        </styled.ListItem>
      </styled.List>
      <styled.Foot>结算 ￥198.00</styled.Foot>
    </styled.SaleBlock>
  );
}

export default SaleBlock;
