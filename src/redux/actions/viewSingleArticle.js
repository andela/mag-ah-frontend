import axios from "axios";
import { VIEW_ARTICLE } from "../action_types";
import { serverError } from "./common";
import config from "../../config";

const baseUrl = config.BASE_URL;

const viewSingleArticle = slug => async dispatch => {
  /**
   * Successfull single article fetch
   *
   * @param (object) article
   * @return (object) type and payload
   */

  const onSuccess = article => {
    dispatch({
      type: VIEW_ARTICLE,
      payload: article
    });
    return article;
  };

  /**
   * single article fetch error
   *
   * @param (object) slug
   * @return (func) dispatch
   */
  const onError = () => {
    dispatch(serverError());
  };
  try {
    const response = await axios.get(`${baseUrl}/articles/${slug}`);
    onSuccess(response.data);
  } catch (error) {
    onError();
  }
};

export default viewSingleArticle;
