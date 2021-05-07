
import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';



// class Welcome{

//   Constructor(name){
//     this.name = name
//   }

//   render(){
//     return <h1>Hello {this.name}</h1>
//   }

// }

// const element = new Welcome("dilum").render();

// function Name(...props){
//   return <h1>Hello {props[1]}</h1>
// }

// const element = new Name("nissan" , "r 34");


// const Clock = (props)=>{
//   setInterval(start,1000);
//   return(
//     <div>
//       <p>Time is now : </p>
//       <p>{new Date().toLocaleTimeString()}</p>
//     </div>
//   )
    
  
// }

// function start(){

//   ReactDOM.render(
//     < Clock />,
//     document.getElementById('root')
//   )
// }

// start();

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {time:new Date() , dev:"dilum"};
  }

 
  componentDidMount(){
     this.tid = setInterval(()=> this.tick() , 1000)
  }

  componentWillUnmount(){
      clearInterval(this.tid)
  }

  tick(){
    this.setState(
      {
        time: new Date()
      }
    );
  }

  render(){
   return(
    <div>
      <p>Time is now :</p>
      <p>{this.state.time.toLocaleTimeString()} {this.state.dev}</p>
    </div>
   )
  }

  

}



function start(){
  ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)
}

setInterval(start,1000)



reportWebVitals();
