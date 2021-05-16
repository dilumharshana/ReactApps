import React, { Component, Fragment } from "react";
import BoilingVerdict from "./test2";

class Calculator  extends React.Component{

  constructor(props){
    super(props);

      this.state ={scale:'' , tempreture:''}

      this.cChange = this.cChange.bind(this);
      this.fChange = this.fChange.bind(this);
  }

  cChange(tempreture){
    this.setState( {scale:'c' , tempreture})
  }

  fChange(tempreture){
    this.setState( {scale:'f' , tempreture})
  }

  render(){

    const celcious = this.state.scale == 'f'? trytoconvert(this.state.tempreture , f2c):this.state.tempreture;
    const feranhite = this.state.scale == 'c'? trytoconvert(this.state.tempreture , c2f) : this.setState.tempreture;
    return(
      <div>
        <TemperatureInput scale='c' tempreture={celcious} onTempretureChange={this.cChange}/>
        <TemperatureInput scale='f' tempreture={feranhite} onTempretureChange={this.fChange}/>

      </div>
    )
  }
  
}




const scale ={
  c:'celcious',
  f:'feranhite'
}

class TemperatureInput  extends React.Component{
  constructor(props){
    super(props)
    this.state = {tempreture:''}
    this.change = this.change.bind(this);
  }

  change(e){
    this.props.onTempretureChange(e.target.value);
  }

  render(){
    return (
      <fieldset>
        <legend>Enter tempreture in {scale[this.props.scale]} :</legend>
        <input type="text" value={this.props.tempreture} onChange={this.change} />
        <BoilingVerdict celcious={this.props.tempreture}/>
      </fieldset>
    )
  }
}


function f2c(value){
  return (value -32)*5/9;
}

function c2f(value){
  return (value*5/9)+32;
}

function trytoconvert(tempreture , convert){

  if(tempreture.isNan){
    return '';
  }

  const output = convert(tempreture);
  return output;
}

export default Calculator;
