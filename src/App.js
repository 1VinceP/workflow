import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import SignInPage from './components/sign-in-page/sign-in-page';
// import HomePage from './';
// import Dashboard from './';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          {/* <Route component={HomePage} exact path='/'/> 
              <Route component={Dashboard} path='/dashboard'/>  */}
        </div>
        <SignInPage />
      </div>
    );
  }
}

export default App;
