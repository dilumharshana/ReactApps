import { Post_Selected } from "./types";

export const seletedPost = (post) => {
  return {
    type: Post_Selected,
    payload: post,
  };
};
