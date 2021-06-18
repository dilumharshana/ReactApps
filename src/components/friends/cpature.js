import React , {useState , useEffect}  from 'react';

import {Mouse} from './friendState';

export const Capture = (props) => {

    const[title , setTitle] = useState(props.title);

     useEffect(() => setTitle(props.title))

     const elements = (hover) => <h1 style={{position:'absolute' , left:hover.x , top:hover.y}}>{hover.x > hover.y? 'Robot' : 'Human'  }</h1>

    return(
        <Mouse render={elements}/>
    )
}