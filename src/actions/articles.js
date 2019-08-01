import axios from 'axios';
import {
  IS_LOADING,
  IS_LOADING_MORE,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_MORE_ARTICLES_SUCCESS,
  GET_MORE_ARTICLES_FAILURE,
  SET_NEXT_PAGE
} from './types';

axios.defaults.baseURL =
  'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';

export const isLoading = () => ({
  type: IS_LOADING
});

export const isLoadingMore = () => ({
  type: IS_LOADING_MORE
});

export const setNextPage = payload => ({
  type: SET_NEXT_PAGE,
  payload
});

export const fetchArticlesSuccess = articles => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles
});

export const fetchArticlesFailure = error => ({
  type: GET_ARTICLES_FAILURE,
  payload: error
});

export const fetchMoreArticlesSuccess = articles => ({
  type: GET_MORE_ARTICLES_SUCCESS,
  payload: articles
});

export const fetchMoreArticlesFailure = error => ({
  type: GET_MORE_ARTICLES_FAILURE,
  payload: error
});

export const fetchArticles = () => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.get('/articles');
    dispatch(fetchArticlesSuccess(response.data.payload.rows));
    dispatch(setNextPage(response.data.payload.metadata));
  } catch (error) {
    dispatch(fetchArticlesFailure(error.response.data.errors.global));
  }
};

export const fetchMoreArticles = nextPage => async dispatch => {
  try {
    dispatch(isLoadingMore());
    const response = await axios.get(nextPage);
    dispatch(fetchMoreArticlesSuccess(response.data.payload.rows));
    dispatch(setNextPage(response.data.payload.metadata));
  } catch (error) {
    dispatch(fetchMoreArticlesFailure(error.response.data.errors.global));
  }
};
