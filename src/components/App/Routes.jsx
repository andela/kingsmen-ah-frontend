import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from '@components/views/NotFound';
import Authenticator from '@containers/hoc/Authenticator';
import SingleArticle from '@containers/views/Article/SingleArticle';
import EditArticle from '@containers/views/Article/EditArticle';
import Home from '@containers/views/Home';
import NewArticle from '@containers/views/Article/NewArticle';
import AuthorizeArticle from '@containers/hoc/AuthorizeArticle';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/new-article" component={Authenticator(NewArticle)} />
        <Route exact path="/article/:articleId" component={SingleArticle} />
        <Route exact path="/article/:articleId/edit" component={AuthorizeArticle(Authenticator(EditArticle))} />
        <Route exact path="/*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
