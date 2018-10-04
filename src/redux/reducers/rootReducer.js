import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./ResetPassword";
import ArticleReducer from "./Articles";

export default combineReducers({
  authSignup: authReducer,
  resetPassword: resetPasswordReducer,
  ArticleReducer
});
