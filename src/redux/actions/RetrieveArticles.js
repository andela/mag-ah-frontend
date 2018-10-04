import axios from "axios";
import * as ActionTypes from "../action_types";
import API_BASE_URL from "./index";

/**
 * create a new article
 *
 * @param {object} article
 * @return {object} type and responseData
 */
export const fetchArticle = articles => ({
  type: ActionTypes.FETCH_ARTICLES,
  articles
});

/**
 * handle request to retrieve article(s)
 *
 * @param {string} articleSlug
 * @return {function} dispatch
 */
export const handleRetrieveArticle = slug => async dispatch => {
  try {
    const response = await axios.get(`${API_BASE_URL}/articles/`, {
      slug
    });
    dispatch(fetchArticle(response.data.Articles.results));
  } catch (error) {}
};
