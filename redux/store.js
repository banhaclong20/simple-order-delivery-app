import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

export const initStore = (initialState = {}) => {
  return createStore(reducer, initialState, bindMiddleware(thunk));
};
