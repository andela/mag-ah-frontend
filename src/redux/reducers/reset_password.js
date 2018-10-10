import { FORGOT_PWD, RESET_PWD, ERROR } from "../action_types";

const initialState = {
  message: {},
  error: null
};
export default (state = initialState, action) => {
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
        error: action.error
      };
    default:
      return state;
  }
};
