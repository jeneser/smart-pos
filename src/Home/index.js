import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../NavBar';
import Shelf from '../Shelf';
import SaleBlock from '../SaleBlock';

import * as styled from './index.styled';

const Home = ({ match }) => {
  return (
    <styled.Wrapper>
      {/* 推荐商品 */}
      <Route path={`${match.url}/:shelf`} component={Shelf} />

      {/* 商品列表 */}
      <Route path={`${match.url}/products`} component={Shelf} />

      {/* 订单 */}
      <SaleBlock />

      {/* 底部导航栏 */}
      <NavBar />
    </styled.Wrapper>
  );
};

export default Home;
