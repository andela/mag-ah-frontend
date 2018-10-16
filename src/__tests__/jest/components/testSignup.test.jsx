import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import SignupModal from "../../../components/SignupModal";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureStore(middleware);
const store = mockStore({});

describe("Signup elements tests", () => {
  it("renders a the signup form elements", () => {
    const wrapper = mount(
      <Provider store={store}>
        <SignupModal />
      </Provider>
    );

    expect(wrapper.find("form")).toBeDefined();
    expect(wrapper.find("button")).toBeDefined();
    expect(wrapper.find("input")).toBeDefined();
    expect(wrapper.find(".ah-google-button").length).toEqual(1);
    expect(wrapper.find(".ah-twitter-button").length).toEqual(1);
    expect(wrapper.find(".ah-facebook-button").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(4);
    expect(wrapper.find("input").length).toEqual(4);
  });
});
