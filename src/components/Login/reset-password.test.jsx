import React from "react";
// import expect from "expect";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ResetPassword } from "./reset-password";

Enzyme.configure({ adapter: new Adapter() });

describe("ResetPassword", () => {
  it("renders without crashing", () => {
    shallow(<ResetPassword message="" />);
  });
  it("handles onChange event", () => {
    const wrapper = shallow(<ResetPassword message="" />);
    expect(wrapper.state("user")).toEqual({
      email: "",
      confirm_password: "",
      password: "",
      token: undefined
    });
    wrapper
      .find("input")
      .first()
      .simulate("change", {
        target: { name: "email", value: "test@gmail.com" }
      });
    expect(wrapper.state("user")).toEqual({
      email: "test@gmail.com",
      confirm_password: "",
      password: "",
      token: undefined
    });
  });
  it("handles submit", () => {
    const dispatch = jest.fn();
    const props = { dispatch };
    const wrapper = shallow(
      <ResetPassword message="Enter your email address" {...props} />
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
