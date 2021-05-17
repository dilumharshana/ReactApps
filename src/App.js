import React from 'react';
import "./App.css";
import Chat from './test2'
import Contact from './test'
import WelcomeNote from './input'

class App extends React.Component {

  render() {
    return (
      <WelcomeNote left={<Chat/>}  right={<Contact/>}/>
    )
    ;
  }
}

export default App;