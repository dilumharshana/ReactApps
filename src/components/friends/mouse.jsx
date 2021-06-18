import React ,{useState} from "react";
import {Mouse} from './friendState';

export default function Mousereuse(props){

    const imager = () => {
        return(
            <img src=".jpg" alt="" width="100px" height="100px" style={{position:'absolute' , left:props.hover.x , top:props.hover.y}}/>
        )
    }

    return ( 
            <Mouse renderthis={imager}/>
     );
}