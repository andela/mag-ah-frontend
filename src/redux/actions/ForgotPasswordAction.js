import axios from "axios";
import * as ActionTypes from "../action_types";
import API_BASE_URL from "./index";

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
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/accounts/forgot_password/`,
      {
        email: email.email,
        client_url: email.client_url
      }
    );
    dispatch(forgotPassword(response.data));
  } catch (error) {
    dispatch(forgotPasswordError(error.response));
  }
};
