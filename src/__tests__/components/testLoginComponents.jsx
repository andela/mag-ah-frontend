import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LoginPage from "../../components/login";

Enzyme.configure({ adapter: new Adapter() });

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const store = mockStore({});

describe("The Login Form", () => {
  const testProps = {
    dispatch: () => 1,
    error: {},
    isAuthenticated: false
  };
  it("Should render without crashing", () => {
    const home = shallow(
      <Provider store={store}>
        <LoginPage {...testProps} />
      </Provider>
    );
    expect(home.find("input").length).toEqual(0);
    expect(home.find("button").length).toEqual(0);
  });
});
