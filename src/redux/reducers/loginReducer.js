import initialState from "./initialState";
import {
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  LOGOUT_SUCCESSFUL,
  SOCIAL_LOGIN_START,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAIL,
  RESET_STATE
} from "../action_types";

export default (state = initialState, action) => {
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
        error: "",
        isAuthenticated: false
      };
    case SOCIAL_LOGIN_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        username: action.username,
        token: action.token,
        email: action.email,
        isLogged: true,
        error: null,
        loading: false
      };
    case SOCIAL_LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: action.error,
        loading: false
      };
    case RESET_STATE:
      return initialState.loginUser;
    default:
      return state;
  }
};
