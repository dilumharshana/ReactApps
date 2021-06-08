import React from 'react';

import Items from '../listitems/Items';
import './ul.css';

var list = () => {

    var person = {
          
        name : "dilum",
        age:22,
        cars : [
            "honda civic ek3" , 
            "Mitsubishi Evolution X"
        ] , 
        start: console.log("Cars Ready")
      }

        return(
            <div>
                <Items name={person.start}/> 
            </div>
        )
}

export default list;