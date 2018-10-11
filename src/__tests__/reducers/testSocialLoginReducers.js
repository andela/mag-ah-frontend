import SocialLoginReducer from "../../redux/reducers/SocialLoginReducer";
import initialState from "../../redux/reducers/initialState";

describe("social login reducer", () => {
  it("should have initialState", () => {
    expect(SocialLoginReducer(undefined, "")).toEqual(initialState);
  });
});
