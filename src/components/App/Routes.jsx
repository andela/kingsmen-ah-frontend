import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/container/Home';
import Profile from '@components/container/Profile/Profile';
import EditProfile from '@components/container/Profile/EditProfile';
import NotFound from '@components/container/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/profile/:username" component={Profile} />
      <Route exact path="/profile/:username/edit" component={EditProfile} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
