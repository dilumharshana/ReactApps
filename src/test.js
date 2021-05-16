import React, { Component, Fragment } from "react";
import InputTemp from "./input";


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { tempretur: '' , Symbol:''};

    this.changeC = this.changeC.bind(this);
    this.changeF = this.changeF.bind(this);
  }

  changeC(value) {
    this.setState({ tempretur: value, symbol:'c' });
    console.log(value);
  }

  changeF(value){
    this.setState({tempretur:value , symbol:'f'});
    console.log('ferenhite');
  }

  render() {

    const celcious = this.state.symbol =='f' ? f2c(this.state.tempretur) : this.state.tempretur;
    const ferenhite = this.state.symbol == 'c' ? c2f(this.state.tempretur) : this.state.tempretur;

    return (
      <React.Fragment>

        <InputTemp tempretur={celcious} tempChange={this.changeC} />
        <InputTemp tempretur={ferenhite} tempChange={this.changeF} />

      </React.Fragment>
    );
  }
}

function c2f(temp){
  return (temp-32)*5/9;
}

function f2c(temp){
  return (temp*5/9)+32
}


export default Calculator;
