import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/views/Home';
import Login from '@components/views/Login';
import Profile from '@components/views/Profile/Profile';
import EditProfile from '@components/views/Profile/EditProfile';
import NotFound from '@components/views/NotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile/:username" component={Profile} />
      <Route exact path="/profile/:profile/edit" component={EditProfile} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);

export default Routes;
