import React from 'react';
import { Login } from '@components/views/Login';

const props = {
  errors: {},
  loading: false,
  loginUser: () => {},
  showSignup: () => {}
};

const setup = () => {
  const wrapper = shallow(<Login {...props} />);
  return wrapper;
};

describe('<Login />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  
  it('should have an email field', () => {
    const field = wrapper.find('RenderInput').first();
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual('email');
  });

  it('should have an password field', () => {
    const field = wrapper.find('RenderInput').at(1);
    expect(field.exists()).toBe(true);
    expect(field.props().name).toEqual('password');
  });

  it('should have an signin button', () => {
    const field = wrapper.find('Button').first();
    expect(field.exists()).toBe(true);
    expect(field.props().children).toEqual('Sign In');
  });

  it('should have an reset password button', () => {
    const field = wrapper.find('Button').at(2);
    expect(field.exists()).toBe(true);
    expect(field.props().children).toEqual('Reset password');
  });

  it('should render the Login component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Login')).toBeTruthy();
  });
});
