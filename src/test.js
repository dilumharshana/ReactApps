import React, { Component, Fragment } from "react";
import Item from './test2'


class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {value:''};

        this.change = this.change.bind(this);
        this.submit =this.submit.bind(this);
    }

    change(event){
        this.setState( {value : event.target.value} );
        console.log(event.target.value);
    }

    submit(event){
        alert(`Hey ${this.state.value} welcome to Symphany :()`);
    }

    render(){

        return(

            <form onSubmit={this.submit}>
                
                    <label htmlFor="">
                        Name :
                    </label>

                    <input type="text" value={this.state.value} onChange={this.change} />

                    <input type="submit"/>

            </form>

        )

    }
}


 

export default Form;
