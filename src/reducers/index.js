import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { postSelected } from "./postSelected";

const root = combineReducers({
  postReducer,
  postSelected,
});

export default root;
