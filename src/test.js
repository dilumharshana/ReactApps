import React, { Component, Fragment } from "react";
import Item from './test2'

function Itemlist(props){

    const titles = <ul> {props.posts.map( post => <li key={post.id}>{post.title}</li>)} </ul>;

    const psts = props.posts.map( post => {

        return (
            <div key={post.id}> 
            <h1>
                {post.title}
                
            </h1>
            <p>
                {post.content}
            </p>
        
        </div>
        )

    })

    console.log(titles);
    console.log(psts);

    return (


        <div>

            {titles}

           {psts}

        </div>
    )

}


 

export default Itemlist;
