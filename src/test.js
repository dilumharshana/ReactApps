import React, { Component, Fragment } from "react";
// import ClockDisplay from "./test2";

// const Btn = () => {

//   const action = (e)=>{
//     e.preventDefault();
//     console.log("Fierd");
//   }
  
//   return <button onClick={action} >Click me</button>;

 

// };

class  Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.action = this.action.bind(this);
  }


  action(){
    console.log(this);
  }

  render() { 
    return ( <button onClick={this.action}>HELLO CLICK ME</button> );
  }
}
 

export default Btn;
