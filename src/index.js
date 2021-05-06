

import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';


const Fn = (props)=>{
  return <h1>Hello , {props.name}</h1>
}

const element = <Fn name="Dilum"/>

ReactDOM.render(
  element,
  document.getElementById('root')
)

reportWebVitals();
