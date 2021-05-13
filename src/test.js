import React, { Component, Fragment } from "react";
import Item from "./test2";

class Form extends React.Component{

    constructor(props){

      super(props){

        this.state = {value:''};

        this.submit = this.submit.bind(this);
        this.changeValue = this.changeValue.bind(this);
      }
    }

    changeValue(event){

      this.setState( {value:event.target.value});
    }

    submit(){
      alert(`Hello ${this.state.value} , please chek your gmail inbox to confirm your email !`);
    }


  render(){
    return(

        <form action="" onSubmit={this.submit}>

          <label htmlFor="">
            User Name:
          </label>

          <input type="text" value={this.state.value} onChange={this.changeValue} />

        </form>
    )
  }

}
export default Form;
