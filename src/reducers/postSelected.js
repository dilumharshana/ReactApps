import { Post_Selected } from "../actions/types";

export const postSelected = (state = null, action) => {
  switch (action.type) {
    case Post_Selected:
      return action.payload;
  }
  return state;
};
