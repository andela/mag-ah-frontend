import expect from "expect";
import {
  ARTICLE_FETCH_ERROR,
  ARTICLE_FETCH_SUCCESS,
  START_ARTICLE_FETCH
} from "../../../redux/action_types";
import allArticlesReducer from "../../../redux/reducers/allArticlesReducer";
import articlesMockData from "../../mock/articles";

const initialState = {
  articles: [],
  error: {},
  fetching: false,
  fetched: false,
  success: false
};
const articles = articlesMockData.Articles.results;
const action = { payload: {} };

describe("Get articles reducer test", () => {
  it("should return initial state when there is no action", () => {
    expect(allArticlesReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle START_ARTICLE_FETCH", () => {
    action.type = START_ARTICLE_FETCH;
    expect(allArticlesReducer(initialState, action).articles).toEqual([]);
    expect(allArticlesReducer(initialState, action).fetching).toEqual(true);
  });

  it("should handle ARTICLE_FETCH_SUCCESS", () => {
    action.type = ARTICLE_FETCH_SUCCESS;
    action.articles = articles;
    expect(allArticlesReducer(initialState, action).articles).toEqual(
      action.articles
    );
    expect(allArticlesReducer(initialState, action).fetching).toEqual(false);
  });

  it("should handle ARTICLE_FETCH_ERROR", () => {
    action.type = ARTICLE_FETCH_ERROR;
    expect(allArticlesReducer(initialState, action).articles).toEqual([]);
    expect(allArticlesReducer(initialState, action).fetching).toEqual(false);
  });
});
