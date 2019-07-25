import {
  UPDATE_PROFILE, FETCH_GUEST_PROFILE, GET_GUEST_PROFILE_ERROR, RESET_PROFILE
} from '../actions/types';

const initialState = {
  profile: {},
  guest: {},
  guestError: {}
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    case FETCH_GUEST_PROFILE:
      return {
        ...state,
        guest: action.payload
      }
    case GET_GUEST_PROFILE_ERROR:
      return {
        ...state,
        guestError: action.payload
      }
    case RESET_PROFILE:
      return {
        ...state,
        profile: {},
        guest: {},
        guestError: {},
        errors: {}
      }
    default:
      return state;
  }
};

export default profileReducer;
