import {
  SET_CURRENT_USER,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  IS_LOADING,
  SET_PROFILE,
  LOGOUT_USER,
  GET_PROFILE_ERROR
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
    case SIGNIN_FAILURE:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        errors: {},
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
    case GET_PROFILE_ERROR:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
