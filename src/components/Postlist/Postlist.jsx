import React from "react";
import { connect } from "react-redux";

const PostList = (props) => {
  if (props.postReducer) {
    return (
      <ul>
        {props.postReducer.map((post) => {
          return <li key={post.id}>{post.des}</li>;
        })}
      </ul>
    );
  }

  return <h2>Please click the button</h2>;
};

function mapStateToProps(state) {
  return {
    postReducer: state.postReducer,
  };
}

export default connect(mapStateToProps)(PostList);
