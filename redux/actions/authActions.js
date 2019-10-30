import Router from "next/router";
import axios from "axios";
import {
  AUTHENTICATE,
  DEAUTHENTICATE,
  USER,
  AUTH_LOGOUT
} from "../types/authType";
import baseUrl from "../../utils/baseUrl";
import { handleSetLocalStorage } from "../../utils/auth";
import { removeCookie } from "../../utils/auth";

// gets the token from the cookie and saves it in the store
const reauthenticate = token => dispatch => {
  dispatch({ type: AUTHENTICATE, payload: token });
};

// removing the token
const deauthenticate = () => dispatch => {
  removeCookie("token");
  Router.push("/");
  dispatch({ type: DEAUTHENTICATE });
};

const setCurrentUser = currentUser => ({
  type: USER,
  payload: currentUser
});

const getUser = token => async dispatch => {
  const payload = { headers: { Authorization: token } };
  const url = `${baseUrl}/api/account`;
  const response = await axios.get(url, payload);
  const user = response.data;

  dispatch(setCurrentUser(user));
  handleSetLocalStorage("user", JSON.stringify(user));
};

const logOut = () => ({
  type: AUTH_LOGOUT
});

export default {
  reauthenticate,
  deauthenticate,
  getUser,
  logOut
};
