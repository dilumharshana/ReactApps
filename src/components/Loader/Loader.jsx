import React, { useState } from "react";

import { PostLoader } from "../PostLoder/PostLoader";
import "bootstrap/dist/css/bootstrap.css";

export const Loader = () => {
  const [load, serLoad] = useState([]);
  return (
    <>
      <button
        className="m-5"
        onClick={(e) => {
          serLoad([...load, `i am a new element ${Math.random()}`]);
        }}
      >
        Click to load
      </button>

      <PostLoader list={load} />
    </>
  );
};
