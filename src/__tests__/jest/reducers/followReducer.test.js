import expect from "expect";
import followUnfollowReducer from "../../../redux/reducers/followUnfollowReducer";
import {
  FOLLOW_SUCCESS,
  UNFOLLOW_SUCCESS,
  FOLLOWING,
  NOT_FOLLOWING
} from "../../../redux/action_types";

const initialState = {
  follow: false,
  message: {},
  error: {}
};

const action = { message: {}, error: {}, follow: false };

describe("Follow and unFollow reducer test", () => {
  it("should return initial state when there is not action", () => {
    expect(followUnfollowReducer(initialState.followUnfollow, action)).toEqual(
      initialState
    );
  });

  it("should handle when follow is default", () => {
    expect(
      followUnfollowReducer(initialState.followUnfollow, action).follow
    ).toEqual(false);
  });

  it("should handle successful follow ", () => {
    action.type = FOLLOW_SUCCESS;
    expect(
      followUnfollowReducer(initialState.followUnfollow, action).follow
    ).toEqual(true);
  });

  it("should handle successful unfollw", () => {
    action.type = UNFOLLOW_SUCCESS;
    expect(
      followUnfollowReducer(initialState.followUnfollow, action).follow
    ).toEqual(false);
  });

  it("should check if following is true", () => {
    action.type = FOLLOWING;
    expect(
      followUnfollowReducer(initialState.followUnfollow, action).follow
    ).toEqual(true);
  });

  it("should check if isfollowing is false", () => {
    action.type = NOT_FOLLOWING;
    expect(
      followUnfollowReducer(initialState.followUnfollow, action).follow
    ).toEqual(false);
  });
});
