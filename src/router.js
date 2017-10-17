import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from './components/sign-in-page/sign-in-page';
import Dashboard from './components/dashboard/Dashboard';
import Analytics from './components/analytics/Analytics';

export default (
    <Switch>
        {/* EMPLOYEE ROUTES */}
        <Route exact path='/' component={SignInPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/analytics' component={Analytics} />

        {/* CLIENT ROUTES */}
        <Route path='/status' component={} />
        <Route path='/chat' component={} />
    </Switch>
)