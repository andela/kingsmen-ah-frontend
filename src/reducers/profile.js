import {
  UPDATE_PROFILE
} from '../actions/types';

const initialState = {
  profile: {}
};

const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      }
    default:
      return state;
  }
};

export default profileReducer;
