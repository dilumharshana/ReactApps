import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { Provider } from "react-redux";

//------------components----------------

import Button from "./components/loader/loader";
import PostList from "./components/Postlist/Postlist";
import store from "./store";
import Postlist from "./components/Postlist/Postlist";
import ZoomText from "./components/zoom";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <div className="container">
        <Button />
        <Postlist />
        <ZoomText />
      </div>
    </App>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
