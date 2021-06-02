import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

import { Dashboard as DashboardView, Dashboard2 as Dashboard2View } from './views';

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <RouteWithLayout
        component={DashboardView}
        layout={MainLayout}
        exact
        path="/dashboard"
      />
      <RouteWithLayout
        component={Dashboard2View}
        layout={MainLayout}
        exact
        path="/dashboard2"
      />
    </Switch>
  );
};

export default Routes;
