import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '@components/views/Login';
import NotFound from '@components/views/NotFound';
import SingleArticle from '../../containers/views/Article/SingleArticle';
import EditArticle from '../../containers/views/Article/EditArticle';
import Home from '../../containers/views/Home';
import NewArticle from '../../containers/views/Article/NewArticle';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path="/new-article" component={NewArticle} />
        <Route exact path="/article/:articleId" component={SingleArticle} />
        <Route exact path="/article/:articleId/edit" component={EditArticle} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
