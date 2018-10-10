import axios from "axios";
import * as ActionTypes from "../action_types";
import BASE_URL from "./common";

export const forgotPassword = responseData => ({
  type: ActionTypes.FORGOT_PWD,
  responseData
});
export const resetPasswordError = error => ({
  type: ActionTypes.ERROR,
  error
});
export default userEmail => dispatch => {
  axios
    .post(`${BASE_URL}accounts/forgot_password/`, userEmail)
    .then(response => {
      const responseData = response.data;
      dispatch(forgotPassword(responseData));
    })
    .catch(error => {
      dispatch(resetPasswordError(error.response));
    });
};
