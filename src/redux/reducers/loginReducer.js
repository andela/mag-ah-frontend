import {
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  LOGOUT_SUCCESSFUL
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.loginUser, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        message: action.message,
        isAuthenticated: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
    case LOGOUT_SUCCESSFUL:
      return {
        ...state,
        message: {},
        error: {},
        isAuthenticated: false
      };
    default:
      return state;
  }
};
