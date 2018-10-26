import axios from "axios";
import { VIEW_ARTICLE } from "../action_types";
import { serverError } from "./common";
import config from "../../config";

const baseUrl = config.BASE_URL;

const GetArticle = slug => async dispatch => {
  const onSuccess = article => {
    dispatch({ type: VIEW_ARTICLE, payload: article });
    return article;
  };
  const onError = () => {
    dispatch(serverError());
  };
  try {
    const axiosConfig = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    const response = await axios.get(
      `${baseUrl}/articles/${slug}`,
      axiosConfig
    );
    onSuccess(response.data);
  } catch (error) {
    onError();
  }
};

export default GetArticle;
