import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingPage from './pages/landing';
import Nav from './nav';
import Footer from './footer';
import Test from './pages/test';
import './App.css';

const HomePage = () => <h2>Home</h2>;
const AboutPage = () => <h2>About</h2>;
const SustainabilityPage = () => <h2>Sustainability</h2>;
const ContactPage = () => <h2>Contact</h2>;

const App = () => (
  <Router>
    <div className="App">
      <Nav />

      <div className='app-content'>
        <Route path="/" exact component={LandingPage} />
        <Route path="/home/" exact component={HomePage} />
        <Route path="/about/" component={AboutPage} />
        <Route path="/sustainability/" component={SustainabilityPage} />
        <Route path="/contact/" component={ContactPage} />
        <Route path="/test/" component={Test} />
      </div>

      <Footer />
    </div>
  </Router>
);

export default App;
