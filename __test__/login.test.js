import React from 'react';
import Routes from '@components/App/Routes';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import auth from '@reducers/auth';
import toJson from 'enzyme-to-json';

describe('<Login />', () => {
  let store;
  beforeEach(() => {
    store = createStore(
      combineReducers({
        auth
      })
    );
  });

  it('should render the Login component correctly', () => {
    const component = (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Routes dispatch={jest.fn()} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );

    const wrapper = mount(component);

    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find('Login')).toBeTruthy();
  });
});
