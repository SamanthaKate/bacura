import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './pages/landing';
import './App.css';

const HomePage = () => <h2>Home</h2>;
const AboutPage = () => <h2>About</h2>;
const SustainabilityPage = () => <h2>Sustainability</h2>;
const ContactPage = () => <h2>Contact</h2>;

const App = () => (
  <Router>
    <div className="App">
      <nav>
        <Link to="/home/">Bacura</Link>
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
        </ul>
      </nav>

      <Route path="/" exact component={LandingPage} />
      <Route path="/home/" exact component={HomePage} />
      <Route path="/about/" component={AboutPage} />
      <Route path="/sustainability/" component={SustainabilityPage} />
      <Route path="/contact/" component={ContactPage} />
    </div>
  </Router>
);

export default App;
