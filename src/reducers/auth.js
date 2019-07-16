import {
  SET_CURRENT_USER,
  GET_ERRORS,
  IS_LOADING,
  SET_PROFILE,
  LOGOUT_USER
} from '../actions/types';

const initialState = {
  loading: false,
  user: {},
  profile: {},
  errors: {},
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: action.payload,
        errors: {}
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        errors: {},
        loading: false
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case SET_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case LOGOUT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        profile: {},
        loading: false
      };
    default:
      return state;
  }
};

export default authReducer;
