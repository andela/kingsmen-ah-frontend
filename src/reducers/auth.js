import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
  } from "@actions/types";
  
  const initialState = {
    user: {},
    error: null,
    message: null,
    status: 400,
    profile: {},
    errors: {},
    isAuthenticated: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload.payload,
          isAuthenticated: true,
          message: action.payload.message
        };
      case REGISTER_FAILURE:
        return {
          ...state,
          error: action.payload,
          message: action.payload
        };
  
      default:
        return state;
    }
  }
  