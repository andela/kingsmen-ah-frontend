import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from '@components/views/Home';
import { logo } from '@base/img/logo.png';

const mockStore = configureStore([thunk]);

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
      <Home {...props} />
    </Provider>
  );
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
