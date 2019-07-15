import React from 'react';
import NotFound from '@components/views/NotFound';

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
    const text = wrapper.find('p').text();
    expect(text).toEqual('Sorry, the page you are looking for could not be found.');
  });

  it('should render the NotFound component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
