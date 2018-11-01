import React from "react";
import Enzyme, { shallow } from "enzyme";
import moxios from "moxios";
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ForgotPassword } from "../../../components/auth/ForgotPasswordComp";
import { FORGOT_PWD } from "../../../redux/action_types";
import { forgotPassword } from "../../../redux/actions/ForgotPasswordAction";

Enzyme.configure({ adapter: new Adapter() });
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
//   configure Mock store
const store = mockStore({ response: { message: "check your email" } });
const email = "test@gmail.com";
const props = { dispatch: jest.fn(), message: {} };

describe("user action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should dispatch an action to generate email address", () => {
    const expectedAction = [
      {
        type: FORGOT_PWD,
        responseData: "test@gmail.com"
      }
    ];

    store.dispatch(forgotPassword(email));
    expect(store.getActions()).toEqual(expectedAction);
  });
});

describe("forgotPassword component", () => {
  const wrapper = shallow(<ForgotPassword {...props} />);

  it("renders without crashing", () => {
    expect(wrapper.find("form.forgotPassword").exists()).toBe(true);
  });

  it("renders an email input", () => {
    expect(wrapper.find("#email").length).toEqual(1);
  });

  it("renders a submit button", () => {
    expect(wrapper.find("#reset").length).toBe(1);
  });

  it("renders an info component for displaying message", () => {
    expect(wrapper.find("p.info").length).toBe(1);
  });

  it("Email input field should respond to change event and change the state of the component", () => {
    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "test@gmail.com" }
    });
    expect(wrapper.state("user")).toEqual({
      client_url: "http://localhost/",
      email: "test@gmail.com"
    });
  });

  it("Reset password link button should respond to submit event", () => {
    wrapper.find("#email").simulate("change", {
      target: { name: "email", value: "test@gmail.com" }
    });
    const fakeEvent = {
      preventDefault: () => ({})
    };
    wrapper.find("form").simulate("submit", fakeEvent);
  });
});
