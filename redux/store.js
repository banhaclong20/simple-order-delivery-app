import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
import { persistStore } from "redux-persist";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(middleware));
  }
  return applyMiddleware(middleware);
};

export const initStore = (initialState = {}) => {
  let store;

  const isClient = typeof window !== "undefined";

  if (isClient) {
    const { persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "root",
      storage
    };

    store = createStore(
      persistReducer(persistConfig, reducer),
      initialState,
      bindMiddleware(thunk)
    );

    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(reducer, initialState, bindMiddleware(thunk));
  }

  return store;
};
