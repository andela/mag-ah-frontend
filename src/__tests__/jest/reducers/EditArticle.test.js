import expect from "expect";
import editArticleReducer from "../../../redux/reducers/editArticleReducer";
import {
  EDIT_ARTICLE_ERROR,
  EDIT_ARTICLE_SUCCESS,
  START_FETCH,
  SERVER_ERROR
} from "../../../redux/action_types";

const initialState = {
  message: "",
  error: {},
  updating: false,
  updated: false,
  success: false
};

const action = { message: "", error: {}, fetching: false };

describe("Edit article Reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(editArticleReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle edit article success", () => {
    action.type = EDIT_ARTICLE_SUCCESS;
    action.message = "";
    expect(
      editArticleReducer(initialState.editArticle, action).message
    ).toEqual("");
  });

  it("should handle edit article error", () => {
    action.type = EDIT_ARTICLE_ERROR;
    expect(editArticleReducer(initialState.editArticle, action).error).toEqual(
      {}
    );
  });
  it("should handle fetching article success", () => {
    action.type = START_FETCH;
    expect(
      editArticleReducer(initialState.createArticle, action).fetching
    ).toEqual(true);
  });
  it("should handle server error", () => {
    action.type = SERVER_ERROR;
    expect(
      editArticleReducer(initialState.createArticle, action).error
    ).toEqual({});
  });
});
