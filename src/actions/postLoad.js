//this is an action
import * as actions from "./actionTypes";

export const getPosts = () => {
  return {
    type: actions.BASE_POST_LOADED,
    payload: [
      { id: 5, des: "post__5" },
      { id: 1, des: "post__1" },
      { id: 2, des: "post__2" },
      { id: 3, des: "post__3" },
      { id: 4, des: "post__4" },
    ],
  };
};
