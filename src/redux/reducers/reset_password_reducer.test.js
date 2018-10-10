import reducer from "./reset_password";
import * as types from "../action_types";

describe("password reset reducers", () => {
  it("should return initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      message: {},
      error: null
    });
  });
  it("should set message informing user to check their email indox", () => {
    expect(
      reducer([], {
        type: types.FORGOT_PWD,
        responseData: "Check your email for further instructions"
      })
    ).toEqual({
      message: "Check your email for further instructions"
    });
  });
  it("should inform a user that their password is updated", () => {
    expect(
      reducer([], {
        type: types.RESET_PWD,
        responseData: "Password updated successfully"
      })
    ).toEqual({
      message: "Password updated successfully"
    });
  });
  it("should set errors when they are caught", () => {
    expect(
      reducer([], {
        type: types.ERROR,
        error: "Passwords do not match"
      })
    ).toEqual({
      error: "Passwords do not match"
    });
  });
});
