import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>
          Hi my name is Samantha
        </p>
      </div>
    );
  }
}

export default App;
