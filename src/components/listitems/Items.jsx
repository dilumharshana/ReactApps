import React from 'react';
import './items.css'

var Items = (props)=>{
   return(
        <li>Name : {props.name}</li>
   )
}

export default Items;