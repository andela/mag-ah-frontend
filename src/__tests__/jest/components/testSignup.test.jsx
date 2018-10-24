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
  it("renders a the signup form elements", () => {
    const wrapper = shallow(<SignupModal store={store} />).dive();
    expect(wrapper.find("form")).toBeDefined();
    expect(wrapper.find("SubmitButton")).toBeDefined();
    expect(wrapper.find("TextInput")).toBeDefined();
    expect(wrapper.find("SubmitButton").length).toEqual(1);
    expect(wrapper.find("TextInput").length).toEqual(4);
  });
});
