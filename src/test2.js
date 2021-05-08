import React, { Component } from "react";

class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = { age: 23 , car:"honda civic" , company: "Virtusa"};
  }

  render() {
    return <div> Name : {this.props.name} {this.state.age} car: {this.state.car} company: {this.state.company}</div>;
  }
}

export default Test2;
