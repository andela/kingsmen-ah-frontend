import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import moxios from 'moxios';
import MockAdapter from 'axios-mock-adapter';
import {
  isLoading,
  setCurrentUser,
  setUserProfile,
  loginUser,
  logoutUser,
  getProfile
} from '@actions/auth';


const url = 'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';
const middlewares = [thunk];
const mockReq = new MockAdapter(axios);
const mockStore = configureMockStore(middlewares);

// jest.mock(axios);

const history = {
  history: {
    push: jest.fn()
  }
};

const values = {
  email: 'example@gmail.com',
  password: 'password'
};

const store = mockStore({
  loading: false,
  isAuthenticated: true,
  errors: null,
  user: {},
  profile: {}
});

describe('Auth actions', () => {
  describe('isLoading', () => {
      it('should return an object with type IS_LOADING', () => {
          const authAction = isLoading();

          expect(authAction).toEqual({ type: 'IS_LOADING' });
      });
  });

  describe('setCurrentUser', () => {
    it('should return an object with type SET_CURRENT_USER', () => {
        const userPayload = {
          id: 134,
          username: 'Kingsmen'
        };
        const authAction = setCurrentUser(userPayload);

        expect(authAction).toEqual({ type: 'SET_CURRENT_USER', payload: {id: 134, username: 'Kingsmen'} });
    });
  });

  describe('setUserProfile', () => {
    it('should return an object with type SET_PROFILE', () => {
        const userPayload = {
          name: 'Kingsmen'
        };
        const authAction = setUserProfile(userPayload);

        expect(authAction).toEqual({ type: 'SET_PROFILE', payload: {name: 'Kingsmen'} });
    });
  });

  describe('Actions', () => {
    afterEach(() => {
        store.clearActions();
        localStorage.clear();
        jest.clearAllMocks();
    });

    describe('Fetching', () => {
        beforeEach(() => {
            moxios.install(axios);
        });

        afterEach(() => {
            moxios.uninstall(axios);
        });

        it('should return data correctly from login user', (done) => {
          const expectedActions = ['IS_LOADING', 'SIGNIN_SUCCESS', 'SET_PROFILE', 'SET_CURRENT_USER'];

          mockReq.onGet(`${url}/auth/login`).reply(200, {
            data: {
              id: 145643,
              email: 'example@gmail.com',
              username: 'Kingsmen',
              exp: 34567567
            }
          });

          store.dispatch(loginUser({ email: 'example@gmail.com', password: 'password' })).then(() => {
              const dispatchedActions = store.getActions();
  
              const actionTypes = dispatchedActions.map(action => action.type);
  
              expect(actionTypes).toEqual(expectedActions);
          });
          done();
      });

      it('should return error from unsuccessful login', (done) => {
        const expectedActions = ['IS_LOADING', 'SIGNIN_FAILURE'];

        mockReq.onPost(`${url}/auth/login`).reply(400, {
          errors: {
            global: 'errors'
          }
        });

        store.dispatch(loginUser(values, history)).catch(() => {
          const dispatchedActions = store.getActions();

          const actionTypes = dispatchedActions.map(action => action.type);

          expect(actionTypes).toEqual(expectedActions);
        });
        done();
      });

      it('should return data correctly from get user profile', (done) => {
        const expectedActions = ['IS_LOADING', 'SET_PROFILE'];

        mockReq.onGet(`${url}/profiles/macco`).reply(200, {
          avatar: '',
          name: 'Kingsmen',
        });

        store.dispatch(getProfile('macco')).then(() => {
            const dispatchedActions = store.getActions();

            const actionTypes = dispatchedActions.map(action => action.type);

            expect(actionTypes).toEqual(expectedActions);
        });
        done();
    });

    it('should return error from unsuccessful fetching of profile', (done) => {
      const expectedActions = ['IS_LOADING', 'GET_PROFILE_ERROR'];

      mockReq.onPost(`${url}/profiles/macco`).reply(400, { errors: { global: 'errors' } });

      store.dispatch(loginUser()).catch(() => {
        const dispatchedActions = store.getActions();

        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
      });
      done();
    });


      it('should return object from successful logout', (done) => {
        const expectedActions = ['IS_LOADING', 'LOGOUT_USER'];

        mockReq.onPost(`${url}/auth/logout`).reply(200, { });

        const history = { push: jest.fn() };
        store.dispatch(logoutUser(history));
        const dispatchedActions = store.getActions();

        const actionTypes = dispatchedActions.map(action => action.type);

        expect(actionTypes).toEqual(expectedActions);
        done();
      });
    });
  });
});