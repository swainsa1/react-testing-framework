import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Blog from "./Blog";
import { NavLink, Route } from "react-router";
import AsyncNewPost from '../../hoc/asynccomponent'

configure({ adapter: new Adapter() });

describe("<Blog/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Blog />);
  });

  describe("Basic Jest", () => {
    let var1;
    beforeEach(() => {
      var1 = 10;
    });
    //It followed by expection
    it("Should be 5", () => {
      expect(var1).toBe(10);
      expect(3 + 2).toBe(5);
      var1 = 50;
    });

    //Test if something is working as expected
    test("if it is 5", () => {
      expect(var1).toBe(10);
      expect(3 + 2).toBe(5);
      var1 = 50;
    });
  });

  it("should contain 2 Route components as auth is false", () => {
    wrapper.setState({ auth: false });
    expect(wrapper.find(Route).length).toEqual(2);
  });

  it("should contain 3 Route components as default auth is true ", () => {
    expect(wrapper.find(Route).length).toEqual(3); 
  });
});
