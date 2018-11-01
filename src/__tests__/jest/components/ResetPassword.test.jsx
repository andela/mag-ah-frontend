import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { ResetPassword } from "../../../components/auth/ResetPassword";

Enzyme.configure({ adapter: new Adapter() });
const props = { dispatch: jest.fn(), message: {}, error: {} };

describe("forgotPassword component", () => {
  it("renders without crashing", () => {
    expect(
      shallow(<ResetPassword {...props} />)
        .find("form.resetPassword")
        .exists()
    ).toBe(true);
  });

  it("renders an submit button", () => {
    expect(shallow(<ResetPassword {...props} />).find("#submit").length).toBe(
      1
    );
  });

  describe("Component input fields", () => {
    it("should respond to change event and change the state of the component", () => {
      const wrapper = shallow(<ResetPassword {...props} />);
      wrapper.find("#password").simulate("change", {
        target: { name: "password", value: "newpassword" }
      });
      wrapper.find("#confirmPassword").simulate("change", {
        target: { name: "confirm_password", value: "newpassword" }
      });

      expect(wrapper.state("user")).toEqual({
        confirm_password: "newpassword",
        email: "",
        password: "newpassword",
        token: ""
      });
      const fakeEvent = {
        preventDefault: () => "fake event"
      };
      wrapper.find("form").simulate("submit", fakeEvent);
    });
  });
});
