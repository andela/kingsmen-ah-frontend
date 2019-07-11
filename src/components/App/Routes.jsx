import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/views/Home';
import Login from '@components/views/Login';
import NotFound from '@components/views/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route path='/' component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
