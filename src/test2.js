import React, { Component } from "react";

class BoilingVerdict extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {

        if(this.props >=100){
            return <p>water boiled</p>
        }

            return <p>water not boiled still</p>
    }
}
 
export default BoilingVerdict;
  


export default BoilingVerdict;
