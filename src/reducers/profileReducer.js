import { FETCH_PROFILE, UPDATE_PROFILE } from '../actions/actionTypes';

const initialState = {
  profile: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROFILE:
      return {
        ...state, 
        profile: action.payload
      }

    case UPDATE_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          ...action.payload
        }
      }

    default:
      return state;
  }
}
