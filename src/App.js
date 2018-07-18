import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderingState from './react-challenges/RenderingState.js';
import Counter from './react-challenges/Counter.js';
import Poker from './react-challenges/Poker.js';
import Header from './react-challenges/Header.js';
import Callback from './react-challenges/Callback.js';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Short React Challenges</h1>
        </header>

        <RenderingState />
        <hr />
        <Counter />
        <hr />
        <Poker />
        <hr />
        <Header />
        <hr /> 
        <Callback />
        <hr />

      </div>
    );
  }
}

export default App;
