import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";

//components --------------------------
import {FriendStateSHhow} from './components/friends/friendState'
import {Capture} from './components/friends/cpature'


  ReactDOM.render(
  <App>
    <div>
      {/* <FriendStateSHhow id ={Math.random()} heading={() => <h1>Seems like render props code shared</h1> }/> */}
      <Capture/>
    </div>
  </App>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
