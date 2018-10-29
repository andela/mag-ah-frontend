import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./ResetPassword";
import loginReducer from "./loginReducer";
import allArticlesReducer from "./allArticlesReducer";
import viewSingleArticleReducer from "./viewSingleArticleReducer";
import editArticleReducer from "./editArticleReducer";
import deleteArticleReducer from "./deleteArticleReducer";
import commentsReducer from "./commentsReducer";

export default combineReducers({
  authSignup: authReducer,
  resetPassword: resetPasswordReducer,
  loginReducer,
  allArticlesReducer,
  getArticle: viewSingleArticleReducer,
  editArticle: editArticleReducer,
  deleteArticleReducer,
  commentsReducer
});
