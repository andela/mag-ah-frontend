import axios from "axios";

import * as actionTypes from "../action_types";
import history from "../../routes/history";
import homepage from "../../views/Home/index";
import config from "../../config";

const loginURL = config.BASE_URL;

export const socialLoginStart = () => ({
  type: actionTypes.SOCIAL_LOGIN_START
});

export const socialLoginSuccess = (token, username, email) => ({
  type: actionTypes.SOCIAL_LOGIN_SUCCESS,
  token,
  username,
  email
});

export const socialLoginFail = error => ({
  type: actionTypes.SOCIAL_LOGIN_FAIL,
  error
});

export default authData => dispatch => {
  dispatch(socialLoginStart());
  axios
    .post(`${loginURL}/users/oauth/`, authData)
    .then(response => {
      const { token, username, email } = response.data.response;
      dispatch(socialLoginSuccess(token, username, email));
      localStorage.setItem("accessToken", token);
      history.push(homepage);
    })
    .catch(error => {
      if (error.data) {
        dispatch(socialLoginFail(error.data.error));
      } else {
        dispatch(socialLoginFail("Oops something went wrong"));
      }
    });
};
