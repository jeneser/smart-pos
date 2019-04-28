import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Login from '../Login';
// import Hangup from '../Hangup';
// import Analysis from '../Analysis';
// import Bills from '../Bills';

const routeConfig = [
  {
    path: 'configuration',
    component: Login
  }
];

function Dashboard({ match }) {
  return routeConfig.map((route) => {
    return (
      <Route
        path={`${match.url}/${route.path}`}
        component={route.component}
        key={route.path}
      />
    );
  });
}

export default Dashboard;
