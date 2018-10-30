import React from "react";
import enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect";
import share from "../../../components/articles/ViewSingleArticle";

enzyme.configure({ adapter: new Adapter() });
const props = {
  href: "www.google.com",
  className: "fab fa-lg fa-twitter"
};

describe("Renders <share /> correctly ", () => {
  const wrapper = shallow(<share {...props} />);
  it("should render share links", () => {
    expect(wrapper.find(".fab").length).toEqual(1);
  });
});
