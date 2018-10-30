import expect from "expect";
import {
  COMMENT_FETCH_SUCCESS,
  COMMENT_FETCH_ERROR,
  COMMENT_CREATE_SUCCESS,
  COMMENT_CREATE_FAILURE
} from "../../../redux/action_types";
import commentsReducer from "../../../redux/reducers/commentsReducer";
import comments from "../../mock/Comments";

const initialState = {
  comments: {
    comments: [],
    error: {},
    fetching: false,
    fetched: false,
    success: false
  }
};

const action = {};
describe("Comment on Article Reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(commentsReducer(initialState, action)).toEqual(initialState);
  });
  it("should handle FETCH_COMMENT_SUCCESS", () => {
    action.type = COMMENT_FETCH_SUCCESS;
    action.comments = comments.comments;
    expect(commentsReducer(initialState.comments, action).comments).toEqual(
      comments.comments
    );
  });
  it("should handle COMMENT_FETCH_ERROR", () => {
    action.type = COMMENT_FETCH_ERROR;
    action.error = comments.error;
    expect(commentsReducer(initialState.comments, action).error).toEqual(
      comments.error
    );
  });
  it("should handle COMMENT_CREATE_SUCCESS", () => {
    action.type = COMMENT_CREATE_SUCCESS;
    action.comment = comments.comment;
    expect(commentsReducer(initialState.comments, action).comment).toEqual(
      comments.comment
    );
  });
  it("should handle COMMENT_CREATE_FAILURE", () => {
    action.type = COMMENT_CREATE_FAILURE;
    action.error = comments.error;
    expect(commentsReducer(initialState.comments, action).error).toEqual(
      comments.error
    );
  });
});
