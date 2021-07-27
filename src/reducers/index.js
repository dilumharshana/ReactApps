import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { postSelected } from "./postSelected";

const root = combineReducers({
  posts: postReducer,
  selectedPost: postSelected,
});

export default root;
