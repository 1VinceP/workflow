import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/dashboard';
import CreateCompany from './components/create-company/create-company';
import EditUser from './components/edit-user/edit-user';
import CreateProject from './components/create-project/create-project'


import DisplayUsers from './components/display-users/display-users';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
<<<<<<< HEAD
        {/* <SignInPage /> */}
        {/* <CreateCompany />
=======
        <CreateProject />
        <SignInPage />
        <CreateCompany />
>>>>>>> master
        <DisplayUsers />
        <EditUser /> */}
        <Route component={SignInPage} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />

      </div>
    );
  }
}

export default App;