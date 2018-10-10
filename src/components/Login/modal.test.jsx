import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Modal from "./modal";
import ForgotPasswordForm from "./forgot-password";

Enzyme.configure({ adapter: new Adapter() });

describe("Modal", () => {
  it("renders without crashing", () => {
    shallow(<Modal title="Forgot password form" form={ForgotPasswordForm} />);
  });
});
