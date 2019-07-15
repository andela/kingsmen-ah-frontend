import {
  IS_LOADING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
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
    case ADD_ARTICLE_SUCCESS:
    case EDIT_ARTICLE_SUCCESS:
    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: [
          ...state.articles, action.payload
        ]
      };
    case ADD_ARTICLE_FAILURE:
    case GET_ARTICLES_FAILURE:
    case EDIT_ARTICLE_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload
      }
  }
}
