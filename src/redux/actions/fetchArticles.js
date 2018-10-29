import axios from "axios";
import { ARTICLE_FETCH_SUCCESS, ARTICLE_FETCH_ERROR } from "../action_types";
import { startFetch } from "./common";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

/**
 * Article fetch success
 *
 * @param (object) articles
 * @return (object) type and payload
 */
export const articleFetchSuccess = articles => ({
  type: ARTICLE_FETCH_SUCCESS,
  articles
});

/**
 * Article fetch error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const articleFetchError = error => ({
  type: ARTICLE_FETCH_ERROR,
  error
});

export const fetchArticles = (username = null) => async dispatch => {
  let response;
  dispatch(startFetch);
  try {
    if (username) {
      response = await axios.get(
        `${url}?author__username__icontains=${username}`
      );
    } else {
      response = await axios.get(url);
    }
    dispatch(articleFetchSuccess(response.data.Articles.results));
  } catch (error) {
    dispatch(articleFetchError(error.message));
  }
};
