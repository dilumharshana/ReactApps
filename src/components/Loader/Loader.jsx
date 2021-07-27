//i am going to use thecreated action from here

import React from "react";

import { fetchPosts } from "../../actions/loadPosts";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Button extends React.Component {
  render() {
    return (
      <button
        onClick={(e) => {
          e.preventDefault();
          this.props.fetchPosts();
        }}
      >
        Click to load posts
      </button>
    );
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
}

export default connect(null, matchDispatchToProps)(Button);
