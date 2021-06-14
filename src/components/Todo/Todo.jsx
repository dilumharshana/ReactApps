import React, { useState , Component } from "react";

//components----------------
import TaskInput from './taskinput/TaskInput';
import TaskList from './TaskList/TaskList'
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {task:[] }
  }

  change = (newTask)=>{
    this.setState({task:this.state.task.concat(newTask)})
  }

  render() { 
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 ">
            <center>
              <div className="todoBox shadow mt-4 mb-4">
              <TaskInput changeState={this.change}/>
              <TaskList tasks={this.state.task}/>
              </div>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Todo;