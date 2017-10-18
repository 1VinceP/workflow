import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignInPage from './components/sign-in-page/sign-in-page';
import Dashboard from './components/dashboard/dashboard';
import Analytics from './components/analytics/analytics';
import EditUser from './components/edit-user/edit-user';
import DisplayUsers from './components/display-users/display-users';
import CreateCompany from './components/create-company/create-company';
import CreateProject from './components/create-project/create-project';
import WhatWeDo from './components/what-we-do/what-we-do';
import MeetTheTeam from './components/meet-the-team/meet-the-team';
import ContactUs from './components/contact-us/contact-us';


export default (
    <Switch>
        {/* EMPLOYEE ROUTES */}
        <Route exact path='/' component={SignInPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/analytics' />

        {/* CLIENT ROUTES */}
        <Route path='/status'  />
        <Route path='/chat' />
        <Route path='/edituser' component={EditUser} />
        <Route path='/display' component={DisplayUsers} />
        <Route path='/create-company' component={CreateCompany} />
        <Route path='/create-project' component={CreateProject} />

        {/* SIGN IN ROUTES */}
        <Route path='/contact' component={ContactUs} />
        <Route path='/our-company' component={WhatWeDo} />
        <Route path='/our-team' component={MeetTheTeam} />
        
    </Switch>
)