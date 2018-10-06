import React, { Component } from 'react';
import logo from '../images/bacura_logo.svg';
import './header.css';

class Header extends Component {
  render() {
    return (
      <div>
        baçura
        <br/>
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}

export default Header;
