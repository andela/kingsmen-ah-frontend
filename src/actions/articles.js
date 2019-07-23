import axios from 'axios';
import {
  IS_LOADING,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE
} from './types';

axios.defaults.baseURL =
  // 'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';
  axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export const isLoading = () => ({
  type: IS_LOADING
});

export const fetchArticlesSuccess = articles => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles
});

export const fetchArticlesFailure = error => ({
  type: GET_ARTICLES_FAILURE,
  payload: error
});

export const fetchArticles = () => async dispatch => {
  try {
    dispatch(isLoading());
    const response = await axios.get('/articles');
    dispatch(fetchArticlesSuccess(response.data.payload.rows));
  } catch (error) {
    dispatch(fetchArticlesFailure(error.response.data.errors.global));
  }
};
