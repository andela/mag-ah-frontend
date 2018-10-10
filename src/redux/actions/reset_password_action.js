import axios from "axios";
import * as ActionTypes from "../action_types";
import BASE_URL from "./common";

const resetPasswordError = error => ({
  type: ActionTypes.ERROR,
  error
});
const userResetPassword = responseData => ({
  type: ActionTypes.RESET_PWD,
  responseData
});
export default userData => dispatch => {
  axios
    .put(`${BASE_URL}reset_password/${userData.token}/`, userData)
    .then(response => {
      const responseData = response.data;
      dispatch(userResetPassword(responseData));
    })
    .catch(error => {
      dispatch(resetPasswordError(error.response));
    });
};
