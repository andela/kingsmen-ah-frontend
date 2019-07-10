import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Home from '@components/views/Home';

configure({ adapter: new Adapter() });

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
