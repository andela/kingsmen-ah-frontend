import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Profile from '@components/container/Profile/Profile';

const mockStore = configureStore([thunk]);

const props = {
  user: {
    isAuthenticated: false,
    username: 'kingsmen'
  },
};

const store = mockStore({
  auth: {},
  profile: {
    profile: {},
  guest: {},
  guestError: {},
  }
});

const setup = () => {
 const wrapper = shallow(
   <Provider store={store}>
     <Profile {...props} />
   </Provider>
 );
 return wrapper;
};

describe('Tests for the <Profile />', () => {
 let wrapper;
 beforeEach(() => {
   wrapper = setup();
 });

 it('should render the <Profile /> component correctly', () => {
   expect(wrapper).toHaveLength(1);
 });
})
