import axios from "axios";
import {
  START_ARTICLE_FETCH,
  ARTICLE_FETCH_SUCCESS,
  ARTICLE_FETCH_ERROR
} from "../action_types";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

/**
 * Action for start article fetch
 *
 * @return {object} type
 */
export const startArticleFetch = () => ({
  type: START_ARTICLE_FETCH
});

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
  dispatch(startArticleFetch);
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
