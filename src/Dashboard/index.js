import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Icon from '../common/components/Icon';

import Sidebar from '../Sidebar';
import Login from '../Login';

import * as styled from './index.styled';

function Dashboard({ match }) {
  return (
    <styled.DashboardWrapper>
      <Router>
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <Route path={`${match.url}/login`} component={Login} />
        <styled.Main />
      </Router>
    </styled.DashboardWrapper>
  );
}

export default Dashboard;
