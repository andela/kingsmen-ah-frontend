import React from 'react';
import Routes from '@components/App/Routes';
import { createStore, combineReducers } from 'redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import auth from '@reducers/auth';

describe('Routes', () => {
    let store, history;

    beforeEach(() => {
        store = createStore(combineReducers({
            auth
        }));
        history = {
          push: jest.fn()
        }
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