import React, { Component, Fragment } from "react";
import Item from "./test2";

class Form extends React.Component{

    constructor(props){

      super(props);

        this.state = {name:'' , email:'', passcode:''};

        this.submit = this.submit.bind(this);
        this.changeValue = this.changeValue.bind(this);
      }
    

      changeValue(event){

        const name = event.target.name;
        this.setState( {[name]:event.target.value})
      }

    submit(){

      const br = <br />
      alert(`Hello ${this.state.name} ,  your email is ${this.state.email} and remember your passcode is ${this.state.passcode}`);
    }


  render(){
    return(

        <form action="" onSubmit={this.submit}>

          <label htmlFor="">
            User Name:
          </label>

          <input type="text" value={this.state.name} onChange={this.changeValue}  name="name"/>
          <input type="email" value={this.state.email}  onChange={this.changeValue} name="email"/>
          <input type="text"  value={this.state.passcode} onChange={this.changeValue} name="passcode"/>
          <input type="submit" name="" id="" />

        </form>
    )
  }

}
export default Form;
