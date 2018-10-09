import axios from "axios";
import { LOGIN_USER, LOGIN_ERROR } from "../action_types";

const url = "http://localhost:8000/api/";
const loginUser = message => ({
  type: LOGIN_USER,
  message
});

const loginError = error => ({
  type: LOGIN_ERROR,
  error
});

export default user => dispatch => {
  axios
    .post(`${url}users/login/`, user)
    .then(response => {
      const message = response.data;
      dispatch(loginUser(message));
    })
    .catch(error => {
      const message = error.response;
      dispatch(loginError(message));
    });
};
