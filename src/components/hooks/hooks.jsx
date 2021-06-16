import React, { useState, useEffect , Component } from "react";

export const Hooktester = (props)=>{

    const[ title , setTitle ] = useState('');

    useEffect( ()=>{
        console.log(props.p);
        return console.log("say bye i am un mounting");
    })
    
    useEffect( ()=> document.title = title);

    const changeTitleStatus = () => {
        document.title = title;
    }

    const titles = ["hello" , "react" , "titles"];
        
    

    return(
        <div>
            <input type="text" value={title} onChange={ (event)=> setTitle(event.target.value)}/>
            <button onClick={changeTitleStatus}>Click to change title</button>
        </div>
    )
}


