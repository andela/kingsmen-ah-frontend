import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Login from '@components/views/Login';

configure({ adapter: new Adapter() });

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
