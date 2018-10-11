import {
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
<<<<<<< HEAD
  LOGOUT_SUCCESSFUL
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.loginUser, action) => {
=======
  LOGOUT_SUCCESSFUL,
  SOCIAL_LOGIN_START,
  SOCIAL_LOGIN_SUCCESS,
  SOCIAL_LOGIN_FAIL
} from "../action_types";

export const initialState = {
  message: {},
  error: {},
  isAuthenticated: false,
  token: "",
  username: null,
  email: null,
  isLogged: false,
  loading: false
};
export default (state = initialState, action) => {
>>>>>>> [Feature #159965267] Implement social login strategies
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
<<<<<<< HEAD
        error: {},
        isAuthenticated: false
      };
=======
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
>>>>>>> [Feature #159965267] Implement social login strategies
    default:
      return state;
  }
};
