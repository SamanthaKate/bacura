import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header';
import Clock from './components/clock';
import BacuraVideo from './videos/bacura.mp4';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <h1>wear<br/>baçura</h1>
        <Clock />

        <video
           className="bacura-video"
           muted
           src={BacuraVideo}
           autoPlay
           loop
          >
          </video>

          <h2>projects@wearbacura.com • <a href="https://www.instagram.com/wearbacura/" target="_blank">insta</a></h2>

      </div>
    );
  }
}

export default App;
