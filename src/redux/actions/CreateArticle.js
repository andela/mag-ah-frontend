import axios from "axios";
import * as ActionTypes from "../action_types";
import API_BASE_URL from "./index";

/**
 * create a new article
 *
 * @param {object} article
 * @return {object} type and responseData
 */
export const createArticle = article => ({
  type: ActionTypes.CREATE_ARTICLES,
  article
});

/**
 * send request to create new article
 *
 * @param {object} articlePayload
 * @return {function} dispatch
 */
export const handleCreateArticle = articlePayload => async dispatch => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/articles/`, {
      article: articlePayload
    });
    dispatch(createArticle(response.data));
  } catch (error) {
    console.log(error);
  }
};
