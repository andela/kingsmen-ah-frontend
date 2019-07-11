import React from 'react';
import Login from '@components/views/Login';

const setup = () => {
  const wrapper = shallow(<Login />);
  return wrapper;
};

describe('<Login />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should display this is the login page', () => {
    const text = wrapper.find('h1').text();
    expect(text).toEqual('This is the login page');
  });

  it('should render the Login component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
