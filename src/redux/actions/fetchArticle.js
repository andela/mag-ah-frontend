import axios from "axios";
import {
  START_SINGLE_ARTICLE_FETCH,
  SINGLE_ARTICLE_FETCH_SUCCESS,
  SINGLE_ARTICLE_FETCH_ERROR
} from "../action_types";
import config from "../../config";

const url = `${config.BASE_URL}/articles/`;

/**
 * Action for start article fetch
 *
 * @return {object} type
 */
export const startArticleFetch = () => ({ type: START_SINGLE_ARTICLE_FETCH });

/**
 * Article fetch success
 *
 * @param (object) articles
 * @return (object) type and payload
 */
export const articleFetchSuccess = articles => ({
  type: SINGLE_ARTICLE_FETCH_SUCCESS,
  articles
});

/**
 * Article fetch error
 *
 * @param (object) error
 * @return (object) type and payload
 */
export const articleFetchError = error => ({
  type: SINGLE_ARTICLE_FETCH_ERROR,
  error
});

export const fetchArticle = slug => async dispatch => {
  dispatch(startArticleFetch);
  try {
    const response = await axios.get(`${url}${slug}/`);
    dispatch(articleFetchSuccess(response.data.Articles.results));
  } catch (error) {
    dispatch(articleFetchError(error.message));
  }
};
