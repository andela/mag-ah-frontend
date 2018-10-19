import axios from "axios";
import { toaster } from "evergreen-ui";
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "../action_types";
import { serverError, startFetch } from "./common";
import config from "../../config";

const url = `${config.BASE_URL}/users/signup/`;

/**
 * Signup successfull
 *
 * @param (string) message
 * @return (object) type and payload
 */
export const signupSuccess = message => ({
  type: SIGNUP_SUCCESS,
  message
});

/**
 * Signup error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const signupError = error => ({
  type: SIGNUP_ERROR,
  error
});

export const signup = user => dispatch => {
  dispatch(startFetch());
  axios
    .post(url, user)
    .then(response => {
      const responseMessage = response.data.response.message;
      dispatch(signupSuccess(responseMessage));
      toaster.success(responseMessage, {
        duration: 3
      });
    })
    .catch(error => {
      if (error.response) {
        const responseErrors = error.response.data.errors;
        dispatch(signupError(responseErrors));
      } else {
        const oops = { serverError: "Oops something went wrong !!" };
        dispatch(serverError(oops));
      }
    });
};

export default signup;
