import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
import Dashboard from './components/dashboard/dashboard';
// import Analytics from './components/analytics/analytics';
import EditUser from './components/edit-user/edit-user';
import AddUser from './components/admin-add-user/admin-add-user';
import DisplayUsers from './components/display-users/display-users';
import CreateCompany from './components/create-company/create-company';
import CreateProject from './components/create-project/create-project';
import WhatWeDo from './components/what-we-do/what-we-do';
import MeetTheTeam from './components/meet-the-team/meet-the-team';
import ContactUs from './components/contact-us/contact-us';
import DisplayTeams from './components/display-teams/display-teams';
import DisplayTasks from './components/display-tasks/display-tasks';
import DisplayProjects from './components/display-projects/display-projects';
import DisplayCompany from './components/display-company/display-company';


export default (
    <Switch>
        {/* EMPLOYEE ROUTES */}
        <Route exact path='/' component={SignInPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/analytics' />

        {/* CLIENT ROUTES */}
        <Route path='/status'  />
        <Route path='/chat' />
        <Route path='/edit-user' component={EditUser} />
        <Route path='/display-users' component={DisplayUsers} />
        <Route path='/display-company' component={DisplayCompany}/>
        <Route path='/display-projects' component={DisplayProjects}/>
        <Route path='/display-tasks' component={DisplayTasks}/>
        <Route path='/display-teams' component={DisplayTeams}/>
        <Route path='/create-company' component={CreateCompany} />
        <Route path='/create-project' component={CreateProject} />
        <Route path='/create-task' />
        <Route path='/create-team' />
        <Route path='/create-user' component={AddUser} />

        {/* SIGN IN ROUTES */}
        <Route path='/contact' component={ContactUs} />
        <Route path='/our-company' component={WhatWeDo} />
        <Route path='/our-team' component={MeetTheTeam} />
        
    </Switch>
)