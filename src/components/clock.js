import React, { Component } from 'react';
import './clock.css';

class Clock extends Component {
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <span className="clock">{this.state.time.toLocaleTimeString([], {hour12: true})}</span>
    );
  }
}

export default Clock;
