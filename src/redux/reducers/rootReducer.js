import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./ResetPassword";
import loginReducer from "./loginReducer";
import allArticlesReducer from "./allArticlesReducer";
import viewSingleArticleReducer from "./viewSingleArticleReducer";
import editArticleReducer from "./editArticleReducer";
import deleteArticleReducer from "./deleteArticleReducer";
import articleRatingReducer from "./articleRatingReducer";
import commentsReducer from "./commentsReducer";
import likeDislikeReducer from "./likeDislikeReducer";
import profileReducer from "./profileReducer";
import notifications from "./notificationsReducer";

export default combineReducers({
  authSignup: authReducer,
  resetPassword: resetPasswordReducer,
  loginReducer,
  allArticlesReducer,
  getArticle: viewSingleArticleReducer,
  editArticle: editArticleReducer,
  deleteArticleReducer,
  rateArticle: articleRatingReducer,
  commentsReducer,
  likeDislikeReducer,
  profile: profileReducer,
  NotificationReducer: notifications
});
