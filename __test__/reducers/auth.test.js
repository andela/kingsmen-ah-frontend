import reducer from '@reducers/auth';

const state = {
  loading: false,
  user: {},
  profile: {},
  errors: {},
  isAuthenticated: false
};

describe('Article Reducers', () => {
  it('should return initial State', () => {
    const newState = reducer(undefined, {});

    expect(newState).toEqual(state);
  });

  it('should handle IS_LOADING action', () => {
    const newState = reducer(state, {
        type: 'IS_LOADING',
        payload: true
    });

    expect(newState).toEqual({ ...state, loading: true });
  });

  it('should handle SET_CURRENT_USER action', () => {
    const newState = reducer(state, {
        type: 'SET_CURRENT_USER',
        payload: {name: 'Berry'}
    });

    expect(newState).toEqual({
      ...state,
      loading: false,
      isAuthenticated: true,
      user: {name: 'Berry'}
    });
  });

  it('should handle SIGNIN_FAILURE action', () => {
    const newState = reducer(state, {
        type: 'SIGNIN_FAILURE',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });

  it('should handle SIGNIN_SUCCESS action', () => {
    const newState = reducer(state, {
      type: 'SIGNIN_SUCCESS'
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
    });
  });

  it('should handle SET_PROFILE action', () => {
    const newState = reducer(state, {
        type: 'SET_PROFILE',
        payload: { username: 'Berry' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        profile: {username: 'Berry'}
    });
  });

  it('should handle LOGOUT_USER action', () => {
    const newState = reducer(state, {
      type: 'LOGOUT_USER'
    });

    expect(newState).toEqual({
        ...state,
    });
  });

  it('should handle GET_PROFILE_ERROR action', () => {
    const newState = reducer(state, {
        type: 'GET_PROFILE_ERROR',
        payload: { error: 'Error' },
    });

    expect(newState).toEqual({
        ...state,
        loading: false,
        errors: {error: 'Error'}
    });
  });
});