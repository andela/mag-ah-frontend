import React from "react";
// import expect from "expect";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ForgotPassword } from "./forgot-password";

Enzyme.configure({ adapter: new Adapter() });

describe("forgotPasswordForm", () => {
  it("renders without crashing", () => {
    shallow(<ForgotPassword message="" />);
  });
  it("handles onChange event", () => {
    const wrapper = shallow(
      <ForgotPassword message="Enter your email address" />
    );
    expect(wrapper.state("user")).toEqual({ email: "" });
    const messageElem = wrapper.find("#info").first();
    expect(messageElem.text()).toEqual("");

    wrapper
      .find("input")
      .first()
      .simulate("change", {
        target: { name: "email", value: "test@gmail.com" }
      });
    expect(wrapper.state("user")).toEqual({ email: "test@gmail.com" });
  });
  it("handles submit", () => {
    const dispatch = jest.fn();
    const props = { dispatch };
    const wrapper = shallow(
      <ForgotPassword message="Enter your email address" {...props} />
    );
    const fakeEvent = {
      preventDefault: () => console.log("preventDefault")
    };

    wrapper
      .find("form")
      .first()
      .simulate("submit", fakeEvent);
  });
});
