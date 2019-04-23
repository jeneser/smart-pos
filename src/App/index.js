import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import NavBar from '../NavBar';
import Home from '../Home';
import Dashboard from '../Dashboard';

function RedirectToHome() {
  return <Redirect to="/home/shelf/one" />;
}

function App() {
  return (
    <Router>
      {/* index */}
      <Route exact path="/" component={RedirectToHome} />

      {/* home */}
      <Route path="/home" component={Home} />

      {/* dashboard */}
      <Route path="/dashboard" component={Dashboard} />

      {/* 底部导航栏 */}
      <NavBar />
    </Router>
  );
}

export default App;
