import {
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  START_FETCH,
  SERVER_ERROR,
  CLEAR_ERROR,
  RESET_STATE
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.authUser, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.message,
        success: true,
        fetched: true,
        fetching: false
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
        success: false,
        fetched: true,
        fetching: false
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      };
    case START_FETCH:
      return {
        ...state,
        fetching: true
      };
    case SERVER_ERROR:
      return {
        ...state,
        error: action.error
      };
    case RESET_STATE:
      return initialState.authUser;
    default:
      return state;
  }
};
