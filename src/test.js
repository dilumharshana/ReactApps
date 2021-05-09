import React, { Component, Fragment } from "react";
// import ClockDisplay from "./test2";

// const Btn = () => {

//   const action = (e)=>{
//     e.preventDefault();
//     console.log("Fierd");
//   }
  
//   return <button onClick={action} >Click me</button>;

 

// };


function Header(props){

  function Newuser(props){
    return <h1>Sign Up to continue !</h1>
  }
  
  function Existing(props){
    return <h1>Hello  Welcom Back {props.name} !</h1>
  }

  
  if(props.user == "true"){

    return <Existing  name = {props.name}/>
  }
  else{
    return <Newuser/>
  }

}
 

export default Header;
