import { FORGOT_PWD, RESET_PWD, ERROR, RESET_STATE } from "../action_types";
import initialState from "./initialState";

export default (state = initialState.resetPassword, action) => {
  switch (action.type) {
    case FORGOT_PWD:
      return {
        ...state,
        message: action.responseData
      };
    case RESET_PWD:
      return {
        ...state,
        message: action.responseData
      };
    case ERROR:
      return {
        ...state,
        error: action.error,
        info: false
      };
    case RESET_STATE:
      return initialState;
    default:
      return state;
  }
};
