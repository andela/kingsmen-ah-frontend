import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import EditProfile from '@components/container/Profile/EditProfile';

const mockStore = configureStore([thunk]);

const props = {
  user: {
    isAuthenticated: false,
    username: 'kingsmen'
  },
};

const store = mockStore({
  auth: {},

});

const setup = () => {
 const wrapper = shallow(
   <Provider store={store}>
     <EditProfile {...props} />
   </Provider>
 );
 return wrapper;
};

describe('Tests for the <EditProfile />', () => {
 let wrapper;
 beforeEach(() => {
   wrapper = setup();
 });

 it('should render the <EditProfile /> component correctly', () => {
   expect(wrapper).toHaveLength(1);
 });
})
