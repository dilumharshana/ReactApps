import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//components
import Time from '../time/time';

const Header = () => {
  return (
    <div className="container-fluid border">
      <div className="row align-items-center">
        <div className="col-10 border">
          <h1 className="text-center">hello welcome to react bootstrap</h1>
        </div>
        <div className="col-2">
          <Time/>
        </div>
      </div>
    </div>
  );
};

export default Header;
