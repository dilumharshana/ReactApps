import React from "react";
import { connect } from "react-redux";

const ZoomText = (props) =>
  props.post ? <h1>{props.post}</h1> : <h1>select a post</h1>;

const mapStoreToProps = (store) => ({ post: store.selectedPost });

export default connect(mapStoreToProps)(ZoomText);
