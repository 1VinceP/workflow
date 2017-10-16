import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
import Header from './components/header/Header'
// import HomePage from './';
import Dashboard from './components/dashboard/dashboard';
import CreateCompany from './components/create-company/create-company'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        
        {/* <CreateCompany /> */}
        <Route component={SignInPage} exact path="/" />
        <Route component={Dashboard} path="/dashboard" />
      </div>
    );
  }
}

export default App;
