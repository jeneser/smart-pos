import React from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Shelf from '../Shelf';
import SaleBlock from '../SaleBlock';
import Calculator from '../Calculator';

import * as styled from './index.styled';

const Home = ({ match }) => {
  return (
    <styled.Wrapper>
      {/* 推荐商品 */}
      <Route path={`${match.url}/shelf/:shelfId`} exact component={Shelf} />

      {/* 商品列表 */}
      <Route path={`${match.url}/products`} component={Shelf} />

      {/* 自定义账单 */}
      <Route path={`${match.url}/calculator`} component={Calculator} />

      {/* 订单 */}
      <SaleBlock />

      {/* 底部导航栏 */}
      <NavBar />
    </styled.Wrapper>
  );
};

export default Home;
