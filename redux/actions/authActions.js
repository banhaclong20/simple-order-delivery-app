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
import { setCookie, removeCookie } from "../../utils/auth";

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ email_id, password }, type) => {
  if (type !== "login") {
    throw new Error("Wrong API call!");
  }
  return dispatch => {
    console.log(email_id);
    axios
      .post(`${API}/${type}`, { email_id, password })
      .then(response => {
        console.log(response.data.data.user.token);
        setCookie("token", response.data.data.user.token);
        Router.push("/users");
        dispatch({
          type: AUTHENTICATE,
          payload: response.data.data.user.token
        });
      })
      .catch(err => {
        console.log(err);
        switch (error.response.status) {
          case 422:
            alert(error.response.data.meta.message);
            break;
          case 401:
            alert(error.response.data.meta.message);
            break;
          case 500:
            alert("Interval server error! Try again!");
            break;
          default:
            alert(error.response.data.meta.message);
            break;
        }
      });
  };
};

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
  authenticate,
  reauthenticate,
  deauthenticate,
  getUser,
  logOut
};
