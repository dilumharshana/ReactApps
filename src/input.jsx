import React from 'react';
import Todos from './Todos';
import Form from './form';

class Task extends React.Component{

    constructor(props){
        super(props);

        this.state = {list:''}

        this.change = this.change.bind(this);
    }

    change(e){
        this.setState({list:e})
    }

  render(){
      return(
          <div>
              <Form change={this.change}/>
              <Todos task={this.state.list}/>
          </div>
      )
  }
}

export default Task;