import React from "react";
import { MemoryRouter } from "react-router-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import shallowToJSON from "enzyme-to-json";
import LoginPage from "../../components/login";

Enzyme.configure({ adapter: new Adapter() });

describe("The loginPage component", () => {
  const testProps = {
    dispatch: () => 1,
    error: "An error occurred",
    isAuthenticated: false
  };
  it("Should initially render without an error", () => {
    const tree = shallow(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <LoginPage {...testProps} />
      </MemoryRouter>
    );
    expect(shallowToJSON(tree)).toMatchSnapshot();
  });
  it("Should show the error message when request fails", () => {
    const tree = shallow(
      <MemoryRouter initialEntries={[{ pathname: "/", key: "testKey" }]}>
        <LoginPage {...testProps} />
      </MemoryRouter>
    );
    expect(shallowToJSON(tree)).toMatchSnapshot();
  });
});
