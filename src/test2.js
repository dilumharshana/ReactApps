import React, { Component } from "react";

class ClockDisplay extends React.Component {

    render() {
      return (
        <div>
          <h1>Time is : {this.props.time}</h1>
        </div>
      )
    }
}

export default ClockDisplay;
