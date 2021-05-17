import React from "react";
// import boil from './test';

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( this.props.children ) ;
  }
}
 
export default Dialog;
