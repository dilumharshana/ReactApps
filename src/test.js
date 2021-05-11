import React, { Component, Fragment } from "react";
import Item from './test2'

function Itemlist(props){

    const numbers = props.numbers;

    return(

        <ul>
            {
                numbers.map( number=> {

                      return  <Item key={(number)} item={number}/>
                    
                })

            }

        </ul>
        

    )

}


 

export default Itemlist;
