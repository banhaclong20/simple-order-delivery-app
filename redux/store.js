import logger from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");

    return composeWithDevTools(applyMiddleware(middleware, logger));
  }
  return applyMiddleware(middleware);
};

export const initStore = (initialState, { isServer }) => {
  if (isServer) {
    initialState = initialState || { fromServer: "foo" };

    return createStore(reducer, initialState, bindMiddleware(thunk));
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["authentication", "order"],
      storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = createStore(
      persistedReducer,
      initialState,
      bindMiddleware(thunk)
    );

    store.__persistor = persistStore(store);

    return store;
  }
};
