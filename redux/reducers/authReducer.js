import {
  AUTHENTICATE,
  DEAUTHENTICATE,
  USER,
  AUTH_LOGOUT
} from "../types/authType";

const initialState = {
  token: null,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        token: action.payload
      };
    case USER:
      return {
        ...state,
        user: action.payload
      };
    case DEAUTHENTICATE:
      return { token: null };
    case AUTH_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
