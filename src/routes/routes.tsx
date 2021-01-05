import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { DevData, DevUI, Home } from '../pages';

export const AppRoutes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/dev-data" component={DevData} />
      <Route path="/dev-ui" component={DevUI} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);
