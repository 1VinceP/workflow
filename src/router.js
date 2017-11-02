import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import EditUser from './components/edit-user/edit-user';
import AddUser from './components/admin-add-user/admin-add-user';
import DisplayUsers from './components/display-users/display-users';
import CreateCompany from './components/create-company/create-company';
import CreateProject from './components/create-project/create-project';
import WhatWeDo from './components/what-we-do/what-we-do';
import MeetTheTeam from './components/meet-the-team/meet-the-team';
import LandingPage from './components/landing-page/Landing_Page';
import ContactUs from './components/contact-us/contact-us';
import DisplayTeams from './components/display-teams/display-teams';
import DisplayTasks from './components/display-tasks/display-tasks';
import DisplayProjects from './components/display-projects/display-projects';
import DisplayCompany from './components/display-company/display-company';
import CreateTeam from './components/create-team/create-team';
import Analytics from './components/analytics/analytics';
import Chat from './components/chat/chat';
import InitialLoad from './components/initial-load/InitialLoadFunctional';
import FirstTimeUser from './components/first-time-user/FirstTimeUser';
import CompanyJoinedAdded from './components/company-joined-added/CompanyJoinedAdded'
import CompanyInfor from './components/company/Company'
import Notifications from './components/notifications/Notifications'
import PageLoading from './components/page-loading/PageLoading'

// import axios from 'axios';

// function checkForLog() {
//     axios.get('/auth/authorized').then(user => {
//         if(!user) {
//           const check = false;
//         } else {
//           const check = true;
//         }
//     })
// }

export default (
    <Switch>
        {/* EMPLOYEE ROUTES */}
        <Route exact path='/' component={LandingPage} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/analytics' component={Analytics} />
        
        {/* CLIENT ROUTES */}
        <Route path='/status'  />
        <Route path='/chat' component={Chat}/>
        <Route path='/edit-user' component={EditUser} />
        <Route path='/display-users' component={DisplayUsers} />
        <Route path='/display-company' component={DisplayCompany}/>
        <Route path='/display-projects' component={DisplayProjects}/>
        <Route path='/display-tasks' component={DisplayTasks}/>
        <Route path='/display-teams' component={DisplayTeams}/>
        <Route path='/create-company' component={CreateCompany} />
        <Route path='/create-project' component={CreateProject} />
        <Route path='/create-task' /> 
        <Route path='/create-team'  component={CreateTeam}/>
        <Route path='/create-user' component={AddUser} />
        <Route path='/company-info' component={CompanyInfor} />
        <Route path='/create-notification' component={Notifications} />

        {/* SIGN IN ROUTES */}
        <Route path='/contact' component={ContactUs} />
        <Route path='/our-company' component={WhatWeDo} />
        <Route path='/our-team' component={MeetTheTeam} />
        <Route path='/loading-page' component={InitialLoad} />
        <Route path='/first-time-user' component={FirstTimeUser} />
        <Route path='/company-joined' component={CompanyJoinedAdded} />
        <Route path='/loading' component={PageLoading} />
        
        
    </Switch>
)