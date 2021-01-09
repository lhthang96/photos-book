import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DevData, DevUI, Home } from '../pages';
import { Login } from '../pages/Login/Login';

export const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/dev-data" component={DevData} />
    <Route path="/dev-ui" component={DevUI} />
    <Route path="/login" component={Login} />
    <Route path="/" component={Home} />
  </Switch>
);
