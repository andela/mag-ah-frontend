import {
  SIGNUP_ERROR,
  SIGNUP_SUCCESS,
  START_FETCH,
  SERVER_ERROR
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        message: action.message,
        success: true,
        fetching: false,
        fetched: true
      };
    case SIGNUP_ERROR:
      return {
        ...state,
        error: action.error,
        fetched: true,
        fetching: false,
        success: false
      };
    case START_FETCH:
      return {
        ...state,
        fetching: true
      };
    case SERVER_ERROR:
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.error
      };
    default:
      return state;
  }
};
