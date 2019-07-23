import {
  IS_LOADING,
  IS_LOADING_MORE,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_MORE_ARTICLES_SUCCESS,
  GET_MORE_ARTICLES_FAILURE,
  SET_NEXT_PAGE
} from '@actions/types';

const initialState = {
  loading: false,
  loadingMore: false,
  errors: {},
  articles: [],
  nextPage: {}
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
    case IS_LOADING_MORE:
      return {
        ...state,
        loadingMore: true,
        errors: {}
      };
    case GET_MORE_ARTICLES_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        articles: state.articles.concat(action.payload),
        errors: {}
      };
    case GET_MORE_ARTICLES_FAILURE:
      return {
        ...state,
        loadingMore: false,
        errors: action.payload
      };
    case SET_NEXT_PAGE:
      return {
        ...state,
        nextPage: action.payload
      };
    default:
      return state;
  }
};
