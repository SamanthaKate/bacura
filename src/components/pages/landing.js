import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import Header from '../header';
import Clock from '../clock';
import BacuraVideo from '../../videos/bacura.mp4';
import './landing.css';

class Landing extends Component {
  render() {
    return (
      <div>
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

        <h2>
          projects@wearbacura.com •
          <a href="https://www.instagram.com/wearbacura/" target="_blank">
            insta
          </a>
        </h2>
      </div>
    );
  }
}

export default Landing;
