import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/views/Home';
import NotFound from '@components/views/NotFound';
import Profile from '@components/commons/profile';
import Suggested from '@components/commons/CreateCommentCard';
import Login from '@components/views/Login';
import Signup from '@components/views/Signup';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comment" component={Suggested} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
