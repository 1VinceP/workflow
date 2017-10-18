import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Router from './router';

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        {Router}
      </div>
    );
  }
}

export default App;