import axios from "axios";
import { toaster } from "evergreen-ui";
import * as ActionTypes from "../action_types";
import config from "../../config";
import { clearState } from "./common";

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
    const url = config.BASE_URL;
    const response = await axios.put(
      `${url}/reset_password/${userData.token}/`,
      userData
    );
    dispatch(userResetPassword(response.data));
    dispatch(clearState());
    document.querySelector("#openLogin").click();
    toaster.success(response.data.message, {
      duration: 3
    });
  } catch (error) {
    dispatch(resetPasswordError(error.response));
  }
};
