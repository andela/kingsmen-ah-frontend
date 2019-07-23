import React from 'react';
import Button from '@components/commons/utilities/Button';

const props = {
  type: 'solid',
  text: 'Login',
  color: 'blue',
  stretch: true,
  onClick: jest.fn()
};

const setup = () => {
  const wrapper = shallow(<Button {...props}>Login</Button>);
  return wrapper;
};

describe('<Button />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });

  it('should render the Button component correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Button')).toBeTruthy();
  });

  it('should display Login as button text', () => {
    expect(wrapper.props().children).toEqual('Login');
  });

  it('should pass since button exists', () => {
    const wrapper = shallow(<Button {...props} stretch={false}>Login</Button>);
    expect(wrapper.find('.block .w-full')).toEqual({});
  });
});
