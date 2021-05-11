import React, { Component, Fragment } from "react";

function Header(props){

    const numbers = props.numbers;

    const li = numbers.map( num => {
    
      return  <li key={props.numbers.indexOf(num)}>{num}</li>
        
    } )

    return <ul>{li}</ul>;
}


 

export default Header;
