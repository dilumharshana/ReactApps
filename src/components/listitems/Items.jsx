import React from "react";
import moment from "moment";
import "./items.css";
import "bootstrap/dist/css/bootstrap.css";

const Items = (props) => {

  const { name , id , email , phone , picture , dob } = props;

  return (
    <li className="mb-4">
      <p className="personName">
        <img src={picture.medium} width="60px" height="60px" alt={name.first} />{" "}
        Name : {name.first}
      </p>

      <p>Email : {email}</p>
      <p>Phone : {phone}</p>
      <p>DOB : {moment(dob).format("DD-YYYY-MM")} </p>
      <p>ID : {id.value} </p>
      <button className="btn btn-primary">Cheking</button>
    </li>
  );
};

export default Items;
