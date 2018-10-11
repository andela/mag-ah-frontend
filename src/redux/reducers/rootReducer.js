import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./ResetPassword";

export default combineReducers({
  authSignup: authReducer,
  resetPassword: resetPasswordReducer
});
