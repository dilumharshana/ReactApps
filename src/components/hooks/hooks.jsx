import React , {useState , useEffect} from'react'

export const Hooktester = () => {

    const[color , setColor] = useState('white');

    useEffect( ()=> document.body.style.backgroundColor = color )

    

    return(
        <button onClick={() =>setColor(color => 'black') }>click to darkmode</button>
    )
}