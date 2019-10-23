import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "primary",
  storage,
  whitelist: ["authentication"]
};

const persistedReducer = persistReducer(persistConfig, reducer);

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

export const initStore = (initialState = {}) => {
  return createStore(persistedReducer, initialState, bindMiddleware(thunk));
};
