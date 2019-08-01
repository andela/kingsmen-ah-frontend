import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import Routes from '@components/App/Routes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Routes', () => {
  let store, history;

  beforeEach(() => {
    store = mockStore({
      auth: {
        user: {},
        profile: {},
        isAuthenticated: false,
        loading: false,
        errors: {}
      },
      article: {
        articles: [],
        nextPage: {},
        loadingMore: false,
        loading: false
      }
    });
    history = {
      push: jest.fn()
    };
  });

  it('should render index page', () => {
    const comp = (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Routes dispatch={jest.fn()} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );

    const wrapper = mount(comp);

    expect(wrapper.find('Home')).toBeTruthy();
  });

  it('should render not found page', () => {
    const comp = (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Routes dispatch={jest.fn()} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
    const wrapper = mount(comp);
    history.push('/not-found');

    expect(wrapper.find('NotFound')).toBeTruthy();
  });

  it('should render the Routes component correctly', () => {
    const shallowWrapper = shallow(<Routes />);

    expect(toJson(shallowWrapper)).toMatchSnapshot();
  });
});
