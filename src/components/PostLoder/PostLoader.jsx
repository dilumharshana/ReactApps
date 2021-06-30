import React, { useState, useEffect } from "react";

import { Display } from "../Display/Display";

export const PostLoader = (props) => {
  const [currentPara, setCurrentPara] = useState();

  return (
    <div>
      {props.list.map((p) => (
        <p onClick={(e) => setCurrentPara(p)}>{p}</p>
      ))}

      <Display para={currentPara} />
    </div>
  );
};
