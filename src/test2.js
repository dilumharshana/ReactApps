import React, { Component } from "react";

function BoilingVerdict(props){

  if(props.celcious >= 100){
    return <p>'water boiled'</p>;
  }

  return <p>'still water not boiled'</p>;

}
  


export default BoilingVerdict;
