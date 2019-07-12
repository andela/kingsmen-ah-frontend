import React from 'react';
import Header from '@components/commons/Header/index';
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
  }
};

const setup = () => {
  const wrapper = shallow(<Header {...props} />);
  console.log(wrapper);
  return wrapper;
};

describe('<Header />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render the Header component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Header')).toBeTruthy();
  });
});
