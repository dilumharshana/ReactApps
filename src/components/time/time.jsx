import React, { Component } from "react";

import './time.css';

export default class Time extends Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timer();
  }

  timer = () => {
    setInterval(() => this.setState({ time: new Date() }), 1000);
  };

  render() {
    return (

        <h3>{this.state.time.toLocaleTimeString()}</h3>

    );
  }
}
