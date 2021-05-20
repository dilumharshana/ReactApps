import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };

    this.submit = this.submit.bind(this);
    this.add = this.add.bind(this);
  }

  submit() {
    this.props.change(this.state.item);
  }

  add(e) {
    this.setState({ item: e.target.value });
  }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.submit}>
          <input type="text" value={this.state.item} onChange={this.add} />
          <input type="submit" value="ADD Task" />
        </form>
      </div>
    );
  }
}

export default Form;
