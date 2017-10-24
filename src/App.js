import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Router from './router';


class App extends Component {
  render() {
    return (

      <div className="App">
        <Header />
        <div style={{width: '100%', height: '60px', background: '#F9F9FA'}} ></div>

        {Router}
      </div>
    );
  }
}

export default App;