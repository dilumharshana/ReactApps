import React, { useState, useEffect } from "react";

// ----------- CSS ---------------
import "bootstrap/dist/css/bootstrap.css";

export const Cart = () => {
  const [count, setCount] = useState((count) => 0);

  const increment = () => {
    setCount((count) => {
      return count + 1;
    });
  };

  return (
    console.log(count),
    (
      <React.Fragment>
        <h1>hello react hooks</h1>
        <button className="btn btn-primary m-5" onClick={increment}>
          Add Items
        </button>
      </React.Fragment>
    )
  );
};
