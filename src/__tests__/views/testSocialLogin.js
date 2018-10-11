import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

// Component to be tested
import {SocialLogin} from "../../views/Login/socialAuth";

Enzyme.configure({adapter: new Adapter()});

// Test componenet renders
describe("Social Login component renders", () => {
  describe("render()", () => {
    test("renders the component", () => {
      const dispatch = jest.fn();
      const props = { dispatch };
      const wrapper = shallow(<SocialLogin {...props} />);
      expect(wrapper.find("div.test").exists()).toBe(true);
    });
  });
});
