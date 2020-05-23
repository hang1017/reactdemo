import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Index from './index/index';
import Home from './home';

const Router = ({ history }) => (
  <HashRouter history={history}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/home" component={Home} />
    </Switch>
  </HashRouter>
);
export default Router;