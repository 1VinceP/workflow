import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
import Header from './components/header/Header'
import Dashboard from './components/dashboard/dashboard';
import CreateCompany from './components/create-company/create-company';
import EditUser from './components/edit-user/edit-user';
import DisplayUsers from './components/display-users/display-users';
import AddRole from './components/create-role/create-role'

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        {/* <SignInPage />
        <CreateCompany />
        <DisplayUsers />
        <EditUser />
        <Route component={SignInPage} exact path="/" />
        <Route component={Dashboard} path="/dashboard" /> */}
        <AddRole />
      </div>
    );
  }
}

export default App;