import React from "react";
import "./items.css";
import moment from 'moment';

var Items = (props) => {
  return (
    <ul>
      <li> <img src={props.image} width="60px" height="60px" alt="" /> Name : {props.name}</li>
      <li>Email : {props.email}</li>
      <li>Phone : {props.phone}</li>
      <li>DOB : {moment(props.dob).format('DD-YYYY-MM')} </li>
    </ul>
  );
};

export default Items;
