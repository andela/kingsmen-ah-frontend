import React from "react";
import { Signup } from "@components/views/Signup";


const setup = () => {
  const wrapper = shallow(<Signup />);
  return wrapper;
};

describe("<Signup />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("should have an username field", () => {
    const field = wrapper.find("RenderInput").first();
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual("username");
  });

  it("should have an email field", () => {
    const field = wrapper.find("RenderInput").at(1);
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual("email");
  });

  it("should have an password field", () => {
    const field = wrapper.find("RenderInput").at(2);
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual("password");
  });

  it("should have an reset password button", () => {
    const field = wrapper.find("Button").at(2);
    expect(field.exists()).toBe(true);
    expect(field.props().children).toEqual("Reset password");
  });

  it("should render the Login component correctly", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find("Signup")).toBeTruthy();
  });
});
