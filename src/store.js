import { rootReducer } from "./reducers/root";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
const middleware = [thunk];
const initialState = {};

export const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    // window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
  )
);
