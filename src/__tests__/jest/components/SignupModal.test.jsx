import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import SignupModal from "../../../components/auth/SignupModal";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe("Signup elements tests", () => {
  const wrapper = shallow(<SignupModal store={store} />).dive();
  it("renders a the signup form elements", () => {
    expect(wrapper.find("form")).toBeDefined();
    expect(wrapper.find("SubmitButton")).toBeDefined();
    expect(wrapper.find("TextInput")).toBeDefined();
    expect(wrapper.find("SubmitButton").length).toEqual(1);
    expect(wrapper.find("TextInput").length).toEqual(4);
  });

  it("renders the SocialLogin component form elements", () => {
    expect(wrapper.find("SocialLogin")).toBeDefined();
  });

  it("it should run dispatch on simulate click", () => {
    const fakeEvent = {
      preventDefault: () => "fake event"
    };
    wrapper.find("form").simulate("submit", fakeEvent);
    expect(store.getActions()).toContainEqual({ type: "START_FETCH" });
  });

  it("Should change state when input field is filled", () => {
    wrapper
      .find("TextInput")
      .first()
      .simulate("change", {
        target: { name: "email", value: "test@gmail.com" }
      });
    expect(wrapper.state().user.email).toEqual("test@gmail.com");
  });

  it("it should clear input fields when clear form button is clicked", () => {
    const fakeEvent = {
      preventDefault: () => "fake event"
    };
    wrapper.find(".clearForm").simulate("click", fakeEvent);
    expect(wrapper.state().user).toEqual({});
  });
});
