import {
  IS_LOADING,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE
} from '@actions/types';

const initialState = {
  loading: false,
  errors: {},
  articles: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        errors: {}
      };
    case GET_ARTICLES_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
