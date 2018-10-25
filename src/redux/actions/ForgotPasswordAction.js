import axios from "axios";
import { toaster } from "evergreen-ui";
import history from "../../routes/history";
import * as ActionTypes from "../action_types";
import config from "../../config";

/**
 * request to change password
 *
 * @param {string} email
 * @return {object} type and responseData
 */
export const forgotPassword = responseData => ({
  type: ActionTypes.FORGOT_PWD,
  responseData
});

/**
 * error from forgot password request
 *
 * @param {string} error
 * @return {object} type and responseData,{boolean} info
 */
export const forgotPasswordError = error => ({
  type: ActionTypes.ERROR,
  error
});

/**
 * send request to generate reset password link
 *
 * @param {object} email
 * @return {function} dispatch
 */
export const handleForgotPassword = email => async dispatch => {
  const url = config.BASE_URL;
  try {
    const response = await axios.post(`${url}/accounts/forgot_password/`, {
      email: email.email,
      client_url: email.client_url
    });
    dispatch(forgotPassword(response.data));
    toaster.success(response.data.message, {
      duration: 3
    });
    history.push("/");
    document.querySelector("#ahResetPasswordModalCloseButton").click();
  } catch (error) {
    dispatch(forgotPasswordError(error.response));
  }
};
