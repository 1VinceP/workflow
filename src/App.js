import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
import Header from './components/header/Header'
// import HomePage from './';
// import Dashboard from './';
import CreateCompany from './components/create-company/create-company'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        <SignInPage />
        </header>
        <CreateCompany />
      </div>
    );
  }
}

export default App;
