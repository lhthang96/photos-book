import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DevData, DevUI, Home } from '../pages';
import { Login } from '../pages/Login/Login';
import { AppPaths } from 'src/common/constants';

export const AppRoutes: React.FC = () => (
  <Switch>
    <Route path={AppPaths.DevData} component={DevData} />
    <Route path={AppPaths.DevUI} component={DevUI} />
    <Route path={AppPaths.Login} component={Login} />
    <Route path={AppPaths.Home} component={Home} />
  </Switch>
);
