import * as actions from "../actions/actionTypes";

export const allPosts = (state = null, action) => {
  switch (action.type) {
    case actions.BASE_POST_LOADED:
      return action.payload;
      break;
    default:
      return state;
      break;
  }
};
