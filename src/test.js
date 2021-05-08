import React, { Component, Fragment } from "react";
import Test2 from "./test2";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        <Test2 name="Dilum" />
      </Fragment>
    );
  }
}

export default Test;
