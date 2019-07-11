import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/views/Home';
import Login from '@components/views/Login';
import NotFound from '@components/views/NotFound';
import Profile from '@components/common/profile';
import Suggested from '@components/common/Suggested';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comment" component={Suggested} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
