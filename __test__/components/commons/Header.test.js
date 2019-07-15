import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
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

const mockStore = configureStore([thunk]);

const store = mockStore({
  auth: {
    profile: {},
    user: {},
    isAuthenticated: false,
    errors: []
  },
});

const setup = () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Header {...props} />
    </Provider>
  );
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
