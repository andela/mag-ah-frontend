import axios from "axios";
import * as ActionTypes from "../action_types";
import API_BASE_URL from "./index";

/**
 * error from forgot password request
 *
 * @param {string} error
 * @return {object} type and error
 */
export const resetPasswordError = error => ({
  type: ActionTypes.ERROR,
  error
});

/**
 * reset user password
 *
 * @param {string} responseData
 * @return {object} type and responseData
 */
export const userResetPassword = responseData => ({
  type: ActionTypes.RESET_PWD,
  responseData
});

/**
 * handle request to save new password
 *
 * @param {array} userData
 * @return {func} dispatch
 */
export const handleResetPassword = userData => async dispatch => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/api/reset_password/${userData.token}/`,
      userData
    );

    dispatch(userResetPassword(response.data));
  } catch (error) {
    dispatch(resetPasswordError(error.response));
  }
};
