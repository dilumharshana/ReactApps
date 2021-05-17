import React from 'react';
import "./App.css";
import WelcomeNote from './test'

class App extends React.Component {

  render() {
    return (
      <WelcomeNote title="ReactJS"  time="8.00 PM"/>
    )
    ;
  }
}

export default App;