import React, { Component, Fragment } from "react";
import Item from './test2'


class Form extends React.Component{

    constructor(props){
        super(props);

        this.state = {value:''}

    }
    
    render(){

        this.render(

            <div>
                <form onSubmit={this.submit}>
                <select name="phone" id="">

                    <option value={this.props.value} name="s20">Samsung s20</option>
                    <option value={this.props.value} name="11max" >Iphone 11</option>

                    </select>
                                    </form>
            </div>

        )
    }
}


 

export default Form;
