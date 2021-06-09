import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import './index.css'
import App from "./App";
import Header from "./components/Header/Header";
import Ulist from './components/list/Ulist';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



ReactDOM.render(
  <App>
    <div>
    <Header title  = "Hello React , I am Dilum Harshana"/>
    <Ulist/>
    </div>
  </App>,
  document.getElementById("root")
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
