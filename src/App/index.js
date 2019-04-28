import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Home from '../Home';
import Checkout from '../Checkout';

import NavBar from '../NavBar';

import Dashboard from '../Dashboard';




import * as styled from './index.styled';

function RedirectToHome() {
  return <Redirect to="/home/shelf/one" />;
}

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  // return <Checkout />

  return (
    <Router>
      <styled.App>
        {/* Redirect */}
        <Route exact path="/" component={RedirectToHome} />

        {/* home */}
        <Route path="/home" component={Home} />

        {/* 结算页 */}
        <Route path="/checkout" component={Checkout} />

        {/* Sidebar */}
        {/* <Sidebar /> */}

        

        

        {/* main */}
        {/* <styled.Main> */}
        {/* index */}

        {/* dashboard */}

        {/* 底部导航栏 */}
        {/* <NavBar
            handleSidebar={() => {
              setIsShowSidebar(!isShowSidebar);
            }}
          /> */}
        {/* </styled.Main> */}
      </styled.App>
    </Router>
  );
}

export default App;
