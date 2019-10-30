import { combineReducers } from "redux";
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  authentication: authReducer,
  order: orderReducer
});

export default rootReducer;
