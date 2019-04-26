import React from 'react';
import Icon from '../common/components/Icon';
import { Shelf } from '../Shelf/index.styled';
import * as styled from './index.styled';

import { mockOrderList } from '../common/mock/products';

function Products() {
  const productList = mockOrderList;

  return (
    <styled.Products>
      {/* head */}
      <styled.Head>
        <styled.Title>商品池</styled.Title>
        <Icon name="icon_search_black" width="0.24" height="0.24" />
      </styled.Head>
      {/* Body */}
      <styled.Body>
        <styled.Row>
          <styled.Col>x</styled.Col>
          <styled.Col>x</styled.Col>
        </styled.Row>
        <styled.Row>
          <styled.Col>x</styled.Col>
          <styled.Col>x</styled.Col>
        </styled.Row>
        <styled.Row>
          <styled.Col>x</styled.Col>
          <styled.Col>x</styled.Col>
        </styled.Row>
      </styled.Body>
    </styled.Products>
  );

  // return (
  //   <Shelf>
  //     <styled.Wrapper>
  //       {/* SearchBar */}
  //       <styled.SearchBar>
  //         <styled.SearchInput placeholder="查询所有商品&优惠&折扣" autoFocus />
  //         <styled.SearchIcon>
  //           <Icon name="icon_search_white" width="0.32" height="0.32" />
  //         </styled.SearchIcon>
  //       </styled.SearchBar>
  //       {/* product list */}
  //       <styled.ProductList>
  //         {productList.map((item, index) => {
  //           return (
  //             <styled.ListItem borderTop={index !== 0} key={item.itemId}>
  //               <styled.Image src={item.itemPic} />

  //               <styled.ItemInfo>
  //                 <styled.ItemTitle>{item.itemTitle}</styled.ItemTitle>
  //                 <styled.ItemDesc>{item.itemDesc}</styled.ItemDesc>
  //               </styled.ItemInfo>

  //               <styled.ItemPrice>￥{item.itemPrice}</styled.ItemPrice>
  //             </styled.ListItem>
  //           );
  //         })}
  //       </styled.ProductList>
  //     </styled.Wrapper>
  //   </Shelf>
  // );
}

export default Products;
