import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import AuthButton from "../../../components/auth/AuthButton";

Enzyme.configure({ adapter: new Adapter() });
const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

const props = {
  isAuthenticated: false,
  dispatch: jest.fn(),
  store
};

describe("Renders <AuthButton /> correctly", () => {
  const wrapper = shallow(<AuthButton {...props} />).dive();

  it("renders sign in and signup Button components when isAuthenticated is false", () => {
    expect(wrapper.find("Button")).toBeDefined();
  });

  it("renders user icopn when isAuthenticated is true", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(".fa-user-circle").length).toEqual(1);
    expect(wrapper.find(".dropdown-menu")).toBeDefined();
    expect(wrapper.find(".dropdown-item").length).toEqual(2);
  });

  it("it should run dispatch on simulate click", () => {
    const fakeEvent = {
      preventDefault: () => "fake event"
    };
    wrapper
      .find(".dropdown-item")
      .last()
      .simulate("click", fakeEvent);
    expect(store.getActions()).toContainEqual({ type: "LOGOUT_SUCCESSFUL" });
  });
});
