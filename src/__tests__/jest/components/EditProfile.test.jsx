import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import EditProfile from "../../../components/profile/EditProfile";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});
const props = {
  store
};

describe("EditProfile component", () => {
  it("renders a the Dashboard component", () => {
    const wrapper = shallow(<EditProfile {...props} />).dive();
    expect(wrapper.find("form")).toBeDefined();
    expect(wrapper.find("button")).toBeDefined();
    expect(wrapper.find("TextFieldGroup")).toBeDefined();
    expect(wrapper.find("button").length).toEqual(1);
    expect(wrapper.find("TextFieldGroup").length).toEqual(10);
  });
});
