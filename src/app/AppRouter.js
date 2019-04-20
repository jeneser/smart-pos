import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Home';
import Dashboard from '../Dashboard';
import Calculator from '../Calculator';

function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/calculator" component={Calculator} />
    </Router>
  );
}

export default AppRouter;
