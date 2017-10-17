import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
// import HomePage from './';
// import Dashboard from './';
import CreateCompany from './components/create-company/create-company'

class App extends Component {
  render() {
    return (
      <div>
        <SignInPage />
        <CreateCompany />
      </div>
    );
  }
}

export default App;
