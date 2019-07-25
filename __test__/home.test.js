import React from 'react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Home from '@components/views/Home';
import { logo } from '@base/img/logo.png';
import reducers from '@reducers/articles';

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
  }
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

describe('Reducer', () => {
  it('Fetch Articles', () => {
    const mock = {
      article: {
        loading: false,
        loadingMore: false,
        errors: {},
        articles: {
          filter: jest.fn()
        },
        nextPage: {}
      }
    };

    const action = {
      type: 'GET_ARTICLES_SUCCESS',
      payload: {
        filter: jest.fn()
      }
    };

    const state = reducers(undefined, action);
    expect(JSON.stringify(state)).toEqual(JSON.stringify(mock.article));
  });
});
