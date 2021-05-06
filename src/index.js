
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



const Mny = (props) => {
  return(<div><h1>{props.total}</h1></div>)
};



ReactDOM.render(
  <Mny total="a"/>,
  document.getElementById('root')
)


reportWebVitals();
