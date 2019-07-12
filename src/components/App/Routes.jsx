import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@components/views/Home';
import Login from '@components/views/Login';
import NewArticle from '@components/views/Article/NewArticle';
import SingleArticle from '@components/views/Article/SingleArticle';
import NotFound from '@components/views/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/new-article" component={NewArticle} />
        <Route exact path="/article/:articleId" component={SingleArticle} />
        <Route path='/' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
