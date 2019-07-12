import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/views/Home';
import Login from '@components/views/Login';
import ErrorPage from '@components/views/ErrorPage';
import Profile from '@components/common/profile';
import Suggested from '@components/common/CreateCommentCard';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/comment" component={Suggested} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route path="/" component={ErrorPage} />
    </Switch>
  </Router>
);

export default Routes;
