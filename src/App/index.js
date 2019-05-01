import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
import Checkout from '../Checkout';
import Configure from '../Configure';
import PayStatus from '../PayStatus';

import * as styled from './index.styled';

/**
 * redirect to home
 */
function RedirectToHome() {
  return <Redirect to="/home/cart" />;
}

/**
 * App
 */
function App() {
  return (
    <Router>
      <styled.App>
        {/* Redirect */}
        <Route exact path="/" component={RedirectToHome} />

        {/* home */}
        <Route path="/home" component={Home} />

        {/* Checkout */}
        <Route path="/checkout" component={Checkout} />

        {/* PayStatus */}
        <Route path="/paystatus" component={PayStatus} />

        {/* Configure */}
        <Route path="/configure" component={Configure} />
      </styled.App>
    </Router>
  );
}

export default App;
