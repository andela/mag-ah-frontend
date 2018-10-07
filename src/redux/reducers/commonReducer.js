import { START_FETCH, SERVER_ERROR } from "../action_types";
import initialState from "./initialState";

export default (state = initialState, action) => {
  switch (action.type) {
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
