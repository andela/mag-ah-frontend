import loginReducer from "../../../redux/reducers/loginReducer";
import initialState from "../../../redux/reducers/initialState";
import * as actionTypes from "../../../redux/action_types";
import authenticatedUser from "../../mock/mockData";

const action = { payload: {} };

describe("social login reducer", () => {
  it("should have initialState", () => {
    expect(loginReducer(initialState, action)).toEqual(initialState);
  });

  it("should handle SOCIAL_LOGIN_SUCCESS", () => {
    action.type = actionTypes.SOCIAL_LOGIN_SUCCESS;
    action.payload.results = authenticatedUser;
    expect(
      loginReducer(initialState.isAuthenticated, action).isAuthenticated
    ).toEqual(true);
  });
});
