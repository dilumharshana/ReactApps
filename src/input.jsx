import React from "react";
// import boil from './test';

class InputTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.change = this.change.bind(this);
  }

  change(e) {
    this.props.tempChange(e.target.value);
  }

  render() {
    return (
      <div>
        <fieldset>
          <form action="">

            <input
              type="text"
              value={this.props.tempretur}
              onChange={this.change}
            />

          </form>
        </fieldset>
      </div>
    );
  }
}

export default InputTemp;
