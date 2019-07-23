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
 auth: {
   isAuthenticated: true,
   profile: {},
   user: {},
   errors: {}
 },

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

 it('should have a <Profile /> component', () => {
   const props = {
     name: 'Test Name',
     onChange: jest.fn(),
     submit: jest.fn(),
     reset: jest.fn(),
     value: '',
     commentError: ''
   };

   const cardOne = shallow(<Profile {...props} />);
   expect(cardOne).toHaveLength(1);
 })

 it('should render the <Profile /> component correctly', () => {
   expect(wrapper).toHaveLength(1);
 });
})
