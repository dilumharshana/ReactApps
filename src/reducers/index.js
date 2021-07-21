import { combineReducers } from "redux";
import postReducer from "./postReducer";

const root = combineReducers({
  postReducer,
});

export default root;
