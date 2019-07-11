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

  it('should render the Home component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
