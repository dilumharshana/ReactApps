import React from 'react';
import Todos from './Todos';

class Task extends React.Component{

    constructor(props){
        super(props);

        this.state = {list:''}

        this.add = this.add.bind(this);
        this.submit = this.submit.add(this);
    }

    add(e){
        
        const num = this.state.list.length;
        this.setState({list : e.target.value})
    }

    submit(){

    }

  render(){
      return(
          <div>
              <form action="" onSubmit={this.submit}>
                  <input type="text" value={this.state.list} onChange={this.add} />
                  <input type="submit" value="ADD Task" />
              </form>

              <Todos task={this.state.list}/>
          </div>
      )
  }
}

export default Task;