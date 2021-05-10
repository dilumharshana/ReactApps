import React, { Component, Fragment } from "react";

function Header(props){

    const numbers = props.numbers;

    const li = numbers.map( num => <li>{num}</li> )

    return <ul>{li}</ul>;
}


 

export default Header;
