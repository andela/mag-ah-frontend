import { LOGIN_USER, LOGIN_ERROR } from "../action_types";

const initialState = { message: {}, error: null };
export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        message: action.message
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
};
