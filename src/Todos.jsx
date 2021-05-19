import React from 'react';

class Todos extends React.Component {
    render() { 
        console.log(this.props.task);
           return <li>{this.props.task}</li>
       
    }
}
 
export default Todos;