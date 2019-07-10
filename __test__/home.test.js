import React from 'react';
import Home from '@components/views/Home';


const setup = () => {
  const wrapper = shallow(<Home />);
  return wrapper;
};

describe('<Home />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should display this is the home page', () => {
    const text = wrapper.find('h1').text();
    expect(text).toEqual('This is the Home page');
  });

  it('should render the Home component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
