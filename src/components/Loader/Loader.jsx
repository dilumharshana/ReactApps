//i am going to use thecreated action from here

import React from "react";
import { getPosts } from "../../actions/postLoad";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const matchDispatchToProps = (dispatch) =>
  bindActionCreators({ getposts: getPosts }, dispatch);

const Button = (props) => (
  <button onClick={() => props.getposts()}>Click to load posts</button>
);

export default connect(matchDispatchToProps)(Button);
