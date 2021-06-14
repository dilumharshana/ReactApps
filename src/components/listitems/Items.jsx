import React from "react";
import moment from "moment";
import './items.css'
import 'bootstrap/dist/css/bootstrap.css'

var Items = (props) => {
  return (
    <li className="mb-4">
      <p className="personName">
        <img src={props.image} width="60px" height="60px" alt={props.name} /> Name :{" "}
        {props.name}
      </p>

      <p>Email : {props.email}</p>
      <p>Phone : {props.phone}</p>
      <p>DOB : {moment(props.dob).format("DD-YYYY-MM")} </p>
      <p>ID : {props.id} </p>
      <button className="btn btn-primary">Cheking</button>
    </li>
  );
};

export default Items;
