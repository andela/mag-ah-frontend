import loginReducer from "../../../redux/reducers/loginReducer";
import initialState from "../../../redux/reducers/initialState";
import {
  LOGIN_SUCCESSFUL,
  LOGIN_ERROR,
  LOGOUT_SUCCESSFUL,
  RESET_STATE,
  SOCIAL_LOGIN_START,
  SOCIAL_LOGIN_FAIL
} from "../../../redux/action_types";

describe("login reducer", () => {
  const action = {};
  const { loginUser } = initialState;
  it("should have initialState", () => {
    expect(loginReducer(initialState.loginUser, action)).toEqual(
      initialState.loginUser
    );
  });
  it("should handle LOGIN_SUCCESSFULL", () => {
    action.type = LOGIN_SUCCESSFUL;
    action.message = "login successfull";
    expect(loginReducer(loginUser, action).message).toEqual(
      "login successfull"
    );
    expect(loginReducer(loginUser, action).isAuthenticated).toEqual(true);
  });

  it("should handle LOGIN_ERROR", () => {
    action.type = LOGIN_ERROR;
    action.error = "oops!";
    expect(loginReducer(loginUser, action).error).toEqual("oops!");
  });

  it("should handle LOGOUT_SUCCESSFULL", () => {
    action.type = LOGOUT_SUCCESSFUL;
    expect(loginReducer(loginUser, action).isAuthenticated).toEqual(false);
  });

  it("should handle SOCIAL_LOGIN_START", () => {
    action.type = SOCIAL_LOGIN_START;
    expect(loginReducer(loginUser, action).loading).toEqual(true);
  });

  it("should handle SOCIAL_LOGIN_FAIL", () => {
    action.type = SOCIAL_LOGIN_FAIL;
    expect(loginReducer(loginUser, action).isAuthenticated).toEqual(false);
  });

  it("should handle RESET_STATE", () => {
    action.type = RESET_STATE;
    expect(loginReducer(loginUser, action)).toEqual(loginUser);
  });
});
