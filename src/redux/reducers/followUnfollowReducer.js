import {
  FOLLOW_SUCCESS,
  SERVER_ERROR,
  UNFOLLOW_SUCCESS,
  FOLLOWING,
  NOT_FOLLOWING
} from "../action_types";
import initialState from "./initialState";

export default (state = initialState.followUnfollow, action) => {
  switch (action.type) {
    case FOLLOW_SUCCESS:
      return { ...state, message: action.payload, follow: true };
    case UNFOLLOW_SUCCESS:
      return { ...state, message: action.payload, follow: false };
    case FOLLOWING:
      return { ...state, follow: true };
    case NOT_FOLLOWING:
      return { ...state, follow: false };
    case SERVER_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
