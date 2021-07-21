import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import root from "./reducers/index";

const middleware = [thunk];
const initialState = {};

const store = createStore(
  root,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
