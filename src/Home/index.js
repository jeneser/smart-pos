import React from 'react';
import { Route } from 'react-router-dom';

import Sidebar from '../Sidebar';
import Cart from '../Cart';
import Orders from '../Orders';

import * as styled from './index.styled';

const Home = ({ match }) => {
  return (
    <styled.Container>
      {/* Sidebar */}
      <Sidebar />

      {/* Cart */}
      <Route path={`${match.url}/cart`} exact component={Cart} />

      {/* Orders */}
      <Route path={`${match.url}/orders`} exact component={Orders} />
    </styled.Container>
  );
};

export default Home;
