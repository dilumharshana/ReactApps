import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Itemlist from "./test";
// import Test2 from "./test2";

const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];


ReactDOM.render(
  <App>
    <Router>
      <Switch>
        <React.Fragment>

          <Itemlist posts={posts}/>

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
