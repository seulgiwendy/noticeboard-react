import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Body from './component/body/Body';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="body-container">
          <Body/>
        </div>
      </div>
    );
  }
}

export default App;
