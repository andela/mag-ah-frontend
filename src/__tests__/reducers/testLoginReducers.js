import loginReducer from "../../redux/reducers/loginReducer";
import initialState from "../../redux/reducers/initialState";

describe("login reducer", () => {
  it("should have initialState", () => {
    expect(loginReducer(undefined, "ACTION_DOES_NOT_EXIST")).toEqual(
      initialState.loginUser
    );
  });
});
