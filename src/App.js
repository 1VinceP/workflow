import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/dashboard';
import CreateCompany from './components/create-company/create-company';
import EditUser from './components/edit-user/edit-user';
import Task from './components/task/Task';
import axios from 'axios';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Task />
        <Header />
        <SignInPage />
        <CreateCompany />
        <EditUser />
        <Route component={SignInPage} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />
      </div>
    );
  }
}

export default App;