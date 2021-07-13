import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { provider } from "react-redux";
import { store } from "./store";

//------------components----------------

import Button from "./components/loader/loader";

ReactDOM.render(
  <provider store={store}>
    <App>
      <div className="container">
        <Button />
      </div>
    </App>
  </provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
