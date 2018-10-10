import * as actions from "./forgot_password_action";
import * as types from "../action_types";

describe("actions", () => {
  it("should create an action to send reset password link", () => {
    const responseData = "check your email for further instructions";
    const expectedAction = {
      type: types.FORGOT_PWD,
      responseData
    };
    expect(actions.forgotPassword(responseData)).toEqual(expectedAction);
  });
});
