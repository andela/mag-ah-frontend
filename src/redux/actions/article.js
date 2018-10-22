import axios from "axios";
import { VIEW_ARTICLE } from "../action_types";
import { serverError } from "./common";
import config from "../../config";

const baseUrl = config.BASE_URL;

const viewArticle = slug => async dispatch => {
  const onSuccess = article => {
    dispatch({ type: VIEW_ARTICLE, payload: article });
    return article;
  };
  const onSeverError = () => {
    dispatch(serverError());
  };
  try {
    const article = await axios.get(`${baseUrl}/articles/${slug}`);
    onSuccess(article.data.Article);
  } catch (error) {
    onSeverError();
  }
};

export default viewArticle;
