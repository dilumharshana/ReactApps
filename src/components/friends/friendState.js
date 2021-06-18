import React, { useState, useEffect } from "react";
import Mousereuse from "./mouse";
import {Capture} from './cpature';

export const FriendStateSHhow = (props) => {
  return (
    <>
      <Mouse render={ position => <Capture hover={position} title = {position.x === position.y ? 'hhhh' : 'kkkkk'}/>}/>
    </>
  );
};

export const Mouse = (props) => {


  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const mover = (event) => {
    setX(event.clientX);
    setY(event.clientY);
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={mover}>
      {props.render({x,y})},
    </div>
  );
};
