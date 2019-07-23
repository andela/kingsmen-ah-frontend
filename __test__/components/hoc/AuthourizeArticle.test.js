import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Redirect, MemoryRouter } from 'react-router-dom';
import AuthorizeArticle from '@containers/hoc/Authenticator';
import Preloader from '@components/commons/Preloader';
import rootReducer from '@reducers/rootReducer';
import { initialState } from '../../setup/mockData';

const loadingInitialValues = {
    ...initialState,
    auth: { ...initialState.auth, loading: true }
};

const ownArticle = {
  ...initialState,
  article: {
    ...initialState.article,
    article: {
      title: 'Hello World',
      slug: 'hello-world',
      author: {
        id: 1,
      }
    }
  },
  auth: {
    ...initialState.auth,
    user: {
      ...initialState.auth.user,
      id: 1
    },
    loading: false
  }
};

const readerArticle = {
  ...initialState,
  article: {
    ...initialState.article,
    article: {
      title: 'Hello World',
      slug: 'hello-world',
      author: {
        id: 1,
      }
    }
  },
  auth: {
    ...initialState.auth,
    isAuthenticated: false,
    user: {
      ...initialState.auth.user,
      id: 2
    },
    loading: false
  }
};

const authStore = createStore(rootReducer, initialState, applyMiddleware(thunk));
const loadingStore = createStore(rootReducer, loadingInitialValues, applyMiddleware(thunk));
const ownerStore = createStore(rootReducer, ownArticle, applyMiddleware(thunk));
const readerStore = createStore(rootReducer, readerArticle, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

const setup = () => {
    const dispatch = jest.fn();

    const props = {
      dispatch
    };

    const MockComponent = () => <div>Hi</div>;
    MockComponent.displayName = 'MockComponent';

    const HOCComponent = AuthorizeArticle(MockComponent);
    const location = {
      pathname: '/article/hello-world',
      state: { from: { pathname: '//article/hello-world/edit' } }
    };

    const component = (
      <Provider store={store}>
        <MemoryRouter>
          <HOCComponent location={location} />
        </MemoryRouter>
      </Provider>
      );

    const wrapper = shallow(component);

    const authComponent = (
      <Provider store={authStore}>
        <MemoryRouter>
          <HOCComponent location={location} />
        </MemoryRouter>
      </Provider>
    );

    const authWrapper = mount(authComponent);

    const loadingComponent = (
      <Provider store={loadingStore}>
        <MemoryRouter>
          <HOCComponent location={location} />
        </MemoryRouter>
      </Provider>
    );

    const ownerComponent = (
      <Provider store={ownerStore}>
        <MemoryRouter>
          <HOCComponent location={location} />
        </MemoryRouter>
      </Provider>
    );

    const readerComponent = (
      <Provider store={readerStore}>
        <MemoryRouter>
          <HOCComponent location={location} />
        </MemoryRouter>
      </Provider>
    );

    const loadingWrapper = mount(loadingComponent);
    const ownerWrapper = mount(ownerComponent);
    const readerWrapper = mount(readerComponent);

    const unAuthComponent = (
      <Provider store={store}>
        <MemoryRouter>
          <HOCComponent location={location} />
        </MemoryRouter>
      </Provider>
    );

    const unAuthWrapper = mount(unAuthComponent);

    return {
      props, unAuthWrapper, authWrapper, ownerWrapper, readerWrapper, loadingWrapper, wrapper, MockComponent
    };
};

describe('HOC: Authorize Article', () => {
    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should render correctly', () => {
        const { wrapper } = setup();

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render unauthorized component: Redirect', () => {
        const { readerWrapper, MockComponent } = setup();

        expect(readerWrapper.find(Redirect).length).toBeTruthy();
        expect(readerWrapper.find(MockComponent).length).toBeFalsy();

        readerWrapper.unmount();
    });

    it('should render authorized component: MockComponent', () => {
        const { ownerWrapper, MockComponent } = setup(); 

        expect(ownerWrapper.find(MockComponent).length).toBeTruthy();
        expect(ownerWrapper.find(Redirect).length).toBeFalsy();

        ownerWrapper.unmount();
    });

    it('should render loading component: Loading', () => {
        const { loadingWrapper, MockComponent } = setup();

        expect(loadingWrapper.find(Preloader).length).toBeTruthy();
        expect(loadingWrapper.find(MockComponent).length).toBeFalsy();

        loadingWrapper.unmount();
    });
});
