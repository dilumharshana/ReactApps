

import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';




const Fn = props => {

  const element = (
    <div>
      <h1>Hello , {props.name}</h1>
      <p>Your age is {props.age}</p>
    </div> 
);

    ReactDOM.render(
      element,
      document.getElementById('root')
    )
}

const Tm = () => {

      const Ti = <p>{new Date().toLocaleTimeString()}</p>
    
      ReactDOM.render(
        Ti,
        document.getElementById('time')
      )
    }

Fn("Dlum Harshana" , 23)   
setInterval(Tm ,1000);






reportWebVitals();
