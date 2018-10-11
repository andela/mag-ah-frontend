import axios from "axios";

import * as actionTypes from "../action_types";
import history from "../../routes/history";
import homepage from "../../views/Home/index";

const BASE_URL = "https://ah-magnificent6-staging.herokuapp.com/api";

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
    .post(`${BASE_URL}/users/oauth/`, authData)
    .then(response => {
      const { token, username, email } = response.data.response;
      dispatch(socialLoginSuccess(token, username, email));
      localStorage.setItem("accessToken", token);
      document.querySelector("#ahSignInModal").remove();
      document.querySelector(".modal-backdrop").remove();
      history.push(homepage);
    })
    .catch(err => {
      dispatch(socialLoginFail(err.data.error));
    });
};
