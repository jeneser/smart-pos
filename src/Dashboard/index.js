import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Icon from '../common/components/Icon';

import Login from '../Login';
import Hangup from '../Hangup';
import Analysis from '../Analysis';
import Bills from '../Bills';

import * as styled from './index.styled';

const routeConfig = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'hangup',
    component: Hangup
  },
  {
    path: 'analysis',
    component: Analysis
  },
  {
    path: 'bills',
    component: Bills
  }
];

function Dashboard({ match }) {
  return (
    <styled.DashboardWrapper>
      {/* Main */}
      <styled.Main>
        {routeConfig.map((route) => {
          return (
            <Route
              path={`${match.url}/${route.path}`}
              component={route.component}
              key={route.path}
            />
          );
        })}
      </styled.Main>
    </styled.DashboardWrapper>
  );
}

export default Dashboard;
