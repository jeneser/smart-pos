import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Headbar from '../Headbar';
import NavBar from '../NavBar';
import Sidebar from '../Sidebar';
import Home from '../Home';
import Dashboard from '../Dashboard';

import SaleBlock from '../SaleBlock';

import * as styled from './index.styled';

function RedirectToHome() {
  return <Redirect to="/home/shelf/one" />;
}

function App() {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <Router>
      <styled.App>
        {/* Sidebar */}
        <Sidebar />

        {/* SaleBlock */}
        <SaleBlock />
        
        {/* main */}
        <styled.Main>
          {/* index */}
          <Route exact path="/" component={RedirectToHome} />

          {/* home */}
          {/* <Route path="/home" component={Home} /> */}

          {/* dashboard */}
          <Route path="/dashboard" component={Dashboard} />

          {/* 底部导航栏 */}
          {/* <NavBar
            handleSidebar={() => {
              setIsShowSidebar(!isShowSidebar);
            }}
          /> */}
        </styled.Main>
      </styled.App>
    </Router>
  );
}

export default App;
