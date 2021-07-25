import { Post_Selected } from "./types";

export const selectPost = (post) => {
  return {
    type: Post_Selected,
    payload: post,
  };
};
