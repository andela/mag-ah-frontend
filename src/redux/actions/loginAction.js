import axios from "axios";
import history from "../../routes/history";
import config from "../../config";

import {
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  LOGOUT_SUCCESSFUL
} from "../action_types";
import Home from "../../views/Home/index";

const url = `${config.BASE_URL}/users/login/`;

/**
 * Login Successful
 *
 * @param message
 * @returns {{type: string, message: *}}
 */
export const loginSuccessful = message => ({
  type: LOGIN_SUCCESSFUL,
  message
});

/**
 * Login error
 *
 * @param error
 * @returns {{type: string, error: *}}
 */
export const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

/**
 * Logout Successful
 *
 * @returns {{type: string}}
 */
export const logoutsuccessful = () => ({
  type: LOGOUT_SUCCESSFUL
});

export const Login = user => dispatch => {
  axios
    .post(url, user)
    .then(response => {
      const message = response.data;
      dispatch(loginSuccessful(message));
      localStorage.setItem("token", message.response.token);
      document.querySelector(".modal-backdrop").remove();
      document.querySelector("#ahSignInModal").remove();
      history.push(Home);
    })
    .catch(error => {
      const message = error.response.data.errors;
      dispatch(loginError(message));
    });
};

export const Logout = () => dispatch => {
  localStorage.clear();
  dispatch(logoutsuccessful());
  history.push(Home);
};
