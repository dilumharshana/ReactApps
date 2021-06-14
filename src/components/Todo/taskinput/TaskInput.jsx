import React, { Component } from "react";
import "./taskinput.css";

class TaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {textBoxValue:'' };
  }

  change = (e)=>{
    this.setState({textBoxValue:e.target.value})  
  }

  addTasktoList = (events)=>{
    events.preventDefault();
    this.props.changeState(this.state.textBoxValue)
    this.setState({textBoxValue:''})
  }

  render() {
    return (
      <div className="mt-5">
        <form action="" onSubmit={this.addTasktoList}>
          <div className="row">
            <div className="col-lg-8 boder">
              <input
                type="text"
                value={this.state.textBoxValue}
                onChange={this.change}
                className="form-control task"
              />
            </div>
            <div className="col-lg-4">
              <input type="submit" name="" id="" className="btn btn-primary attTaskBtn" value="Add New"/>
              {/* <button className="btn btn-primary attTaskBtn" onClick={this.addTasktoList} id="btnjs">Add Task</button> */}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TaskInput;
