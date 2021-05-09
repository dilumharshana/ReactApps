import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./test";
import Test2 from "./test2";

ReactDOM.render(
  <App>
    <Router>
      <Switch>
        <React.Fragment>
          {/* <Route exact path="/" component={Header}  user="true" name="dilum"/>
          <Route path="/t2" component={Test2} /> */}
          <Header user="true" name="Dilum Harshana"/>
        </React.Fragment>
      </Switch>
    </Router>
  </App>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
