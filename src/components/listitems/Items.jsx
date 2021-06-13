import React from "react";
import moment from "moment";
import './items.css'

var Items = (props) => {
  return (
    <li>
      <p className="personName">
        <img src={props.image} width="60px" height="60px" alt={props.name} /> Name :{" "}
        {props.name}
      </p>

      <p>Email : {props.email}</p>
      <p>Phone : {props.phone}</p>
      <p>DOB : {moment(props.dob).format("DD-YYYY-MM")} </p>
      <p>ID : {props.id} </p>
    </li>
  );
};

export default Items;
