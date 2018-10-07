// Signup user
import axios from "axios";

import { SIGNUP_SUCCESS, SIGNUP_ERROR } from "../action_types";
import { serverError, startFetch } from "./common";

const url = "http://localhost:8000/api/";

export const signupSuccess = message => ({
  type: SIGNUP_SUCCESS,
  message
});

export const signupError = error => ({
  type: SIGNUP_ERROR,
  error
});

export default user => dispatch => {
  dispatch(startFetch());
  axios
    .post(`${url}users/signup/`, user)
    .then(response => {
      const responseMessage = response.data.response.message;
      dispatch(signupSuccess(responseMessage));
    })
    .catch(error => {
      if (error.response) {
        const responseErrors = error.response.data.errors;
        dispatch(signupError(responseErrors));
      } else {
        dispatch(serverError("Oops something went wrong"));
      }
    });
};
