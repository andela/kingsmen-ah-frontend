import { SET_CURRENT_USER, GET_ERRORS } from '../actions/types';

const initialState = {
  user: {},
  profile: {},
  errors: {},
  isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, isAuthenticated: true, user: action.payload, errors: {} };
    case GET_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default authReducer;
