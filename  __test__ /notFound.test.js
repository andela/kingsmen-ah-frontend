import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import NotFound from '@components/views/NotFound';

configure({ adapter: new Adapter() });

const setup = () => {
  const wrapper = shallow(<NotFound />);
  return wrapper;
};

describe('<NotFound />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should display this page is not found', () => {
    const text = wrapper.find('h1').text();
    expect(text).toEqual('This page is not found');
  });

  it('should render the NotFound component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
