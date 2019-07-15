import axios from 'axios';
import {
  IS_LOADING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE
} from './types';
import instance from '../config/axios';

export const isLoading = () => ({
  type: IS_LOADING
});

export const addArticleSuccess = article => ({
  type: ADD_ARTICLE_SUCCESS,
  payload: article
});

export const addArticleFailure = error => ({
  type: ADD_ARTICLE_FAILURE,
  payload: error
});

export const fetchArticlesSuccess = articles => ({
  type: GET_ARTICLES_SUCCESS,
  payload: articles
});

export const fetchArticlesFailure = error => ({
  type: GET_ARTICLES_FAILURE,
  payload: error
});

export const editArticleSuccess = article => ({
  type: EDIT_ARTICLE_SUCCESS,
  payload: article
});

export const editArticleFailure = error => ({
  type: EDIT_ARTICLE_FAILURE,
  payload: error
});

export const createNewArticle = data => async (dispatch) => {
  try {
    dispatch(isLoading());

    const response = instance.post('/articles', data);
    dispatch(addArticleSuccess(response.data.data.payload));
  } catch (error) {
    dispatch(addArticleFailure(error.response.data.errors));
  }
}

export const editArticle = (id, data) => async (dispatch) => {
  try {
    dispatch(isLoading());

    const response = instance.put(`/articles/${id}`, data);
    dispatch(editArticleSuccess(response.data.data.payload));
  } catch (error) {
    dispatch(editArticleFailure(error.response.data.errors));
  }
}

export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch(isLoading);

    const response = await axios.get('http:localhost:3000/articles');

    dispatch(fetchArticlesSuccess(response.data.data));
  } catch (error) {
    dispatch(fetchArticlesFailure(error.response.data));
  }
}