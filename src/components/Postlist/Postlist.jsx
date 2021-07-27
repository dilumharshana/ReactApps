import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { seletedPost } from "../../actions/showPost";

const PostList = (props) => {
  if (props.Post) {
    return (
      <ul>
        {props.Post.map((post) => {
          return (
            <li key={post.id} onClick={props.zoompost(post.des)}>
              {post.des}
            </li>
          );
        })}
      </ul>
    );
  }

  return <p>Please click the button</p>;
};

const mapStateToProps = (store) => ({
  Post: store.posts,
});

const mapActionToProps = (dispatch) =>
  bindActionCreators({ zoompost: seletedPost }, dispatch);

export default connect(mapStateToProps, mapActionToProps)(PostList);
