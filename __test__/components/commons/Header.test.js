import React from 'react';
import { Header } from '@components/commons/Header/index';
import { logo } from '@base/img/logo.png';

const props = {
  user: {
    isAuthenticated: false,
    username: 'kingsmen'
  },
  profile: {
    firstname: 'Kings',
    lastname: 'men',
    avatar: logo
  },
  errors: {},
  logoutUser: () => {},
  isAuthenticated: false,
  history: {}
};

const setup = () => {
  const wrapper = shallow(<Header {...props} />);
  return wrapper;
};

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it("should show Author's Haven as title", () => {
    const header = wrapper.find('h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toEqual('Author‘s Haven');
  });

  it('should have login button in header', () => {
    const button = wrapper.find('Button').first();
    expect(button.exists()).toBe(true);
    expect(button.props().children).toEqual('Sign In');
  });

  it('should have logout button in header', () => {
    const button = wrapper.find('Button').at(1);
    expect(button.exists()).toBe(true);
    expect(button.props().children).toEqual('Get Started');
  });

  it('should render the Header component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Header')).toBeTruthy();
    wrapper.find('button').first;
  });
});
