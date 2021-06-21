import React from "react";

import { MenuItems } from "./menu items/menu items";

import "bootstrap/dist/css/bootstrap.css";

//------------------ COMPONENTS -----------------

import { Toggler } from "./toggler/toggler";
import { Brand } from "./brand/brand";
import { PostBtn } from "./post button/PostBtn";

export const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Toggler />
        <Brand />
        <MenuItems
          items={[
            { name: "Home" },
            { name: "Buy Cars" },
            { name: "Sell Cars" },
          ]}
        />
        <PostBtn />
      </div>
    </nav>
  );
};
