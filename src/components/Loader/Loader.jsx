import React from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { loadPosts } from "../../actions/postsLoad";

export const Button = (props) => {
  return <button>Click to Load</button>;
};
