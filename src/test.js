import React from "react";
import Dialog from "./input.jsx";

class WelcomeNote extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dialog>
        <div>
          <h1>{this.props.title}</h1>
          <p>{this.props.time}</p>
        </div>
      </Dialog>
    );
  }
}

export default WelcomeNote;
