import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => (
  <nav className='app-nav'>
    <Link to="/home/">Baçura</Link>
    <ul>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/sustainability/">Sustainability</Link>
      </li>
      <li>
        <Link to="/contact/">Contact</Link>
      </li>
      <li>
        <Link to="/test/">Test</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
