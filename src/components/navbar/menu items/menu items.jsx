import React from "react";

import "bootstrap/dist/css/bootstrap.css";

export const MenuItems = (props) => {
  return (
    <div
      className=" collapse navbar-collapse justify-content-center"
      id="navbarText"
    >
      <ul className="navbar-nav ">
        {props.items.map((item) => (
          <li className="nav-item">
            <a href="" className="nav-link items">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
