import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import NotFound from '@components/views/NotFound';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  loading: false,
  isAuthenticated: true,
  errors: null,
  user: {},
  profile: {}
});

const setup = () => {
  const wrapper = shallow(<NotFound store={store} />);
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
