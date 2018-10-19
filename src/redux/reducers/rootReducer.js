import { combineReducers } from "redux";
import authReducer from "./authReducer";
import resetPasswordReducer from "./ResetPassword";
import loginReducer from "./loginReducer";

export default combineReducers({
  authSignup: authReducer,
  resetPassword: resetPasswordReducer,
  loginReducer
});
