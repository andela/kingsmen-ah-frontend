import axios from 'axios';
import { toast } from 'react-toastify';
import {
  IS_LOADING,
  ADD_ARTICLE_SUCCESS,
  ADD_ARTICLE_FAILURE,
  EDIT_ARTICLE_SUCCESS,
  EDIT_ARTICLE_FAILURE,
  GET_ARTICLES_SUCCESS,
  GET_ARTICLES_FAILURE,
  GET_ARTICLE_FAILURE,
  GET_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_FAILURE,
  GET_TAGS_SUCCESS,
  GET_TAGS_FAILURE
} from './types';


axios.defaults.baseURL = 'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';

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

export const fetchArticleSuccess = articles => ({
  type: GET_ARTICLE_SUCCESS,
  payload: articles
});

export const fetchArticleFailure = error => ({
  type: GET_ARTICLE_FAILURE,
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

export const deleteArticleSuccess = article => ({
  type: DELETE_ARTICLE_SUCCESS,
  payload: article
});

export const deleteArticleFailure = error => ({
  type: DELETE_ARTICLE_FAILURE,
  payload: error
});

export const getTagsSuccess = tags => ({
  type: GET_TAGS_SUCCESS,
  payload: tags
});

export const getTagsFailure = errors => ({
  type: GET_TAGS_FAILURE,
  payload: errors
});

export const createNewArticle = (data, history) => async (dispatch) => {
  try {
    dispatch(isLoading());

    const response = await axios.post('/articles', data);
    dispatch(addArticleSuccess(response.data.payload));
    toast.success('Article Published');
    history.push(`/article/${response.data.payload.slug}`);
  } catch (error) {
    dispatch(addArticleFailure(error.response.data.errors));
  }
}

export const editArticle = (id, data, history) => async (dispatch) => {
  try {
    dispatch(isLoading());

    const response = await axios.put(`/articles/${id}`, data);
    history.push(`/article/${id}`);
    toast.success('Article updated!');
    dispatch(editArticleSuccess(response.data.payload));
  } catch (error) {
    dispatch(editArticleFailure(error.response.data.errors.global));
  }
}

export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch(isLoading);

    const response = await axios.get('/articles');

    dispatch(fetchArticlesSuccess(response.data.payload.rows));
  } catch (error) {
    dispatch(fetchArticlesFailure(error.response.data.errors.global));
  }
}

export const getAllTags = (slug) => async (dispatch) => {
  try {
    dispatch(isLoading);

    const response = await axios.get('/tags');
    const result = response.data.payload.filter(item => item.slug === slug);
    dispatch(getTagsSuccess(result[0].tags));
  } catch (error) {
    dispatch(getTagsFailure(error.response.data.errors.global));
  }
}

export const getSingleArticle = id => async (dispatch) => {
  try {
    dispatch(isLoading);

    const response = await axios.get(`/articles/${id}`);

    dispatch(fetchArticleSuccess(response.data.payload));
  } catch (error) {
    dispatch(fetchArticleFailure(error.response.data.errors.global));
  }
}

export const deleteArticle = id => async (dispatch) => {
  try {
    dispatch(isLoading);
    
    await axios.delete(`/articles/${id}`);
    toast.error('Article Deleted!');
  } catch (error) {
    dispatch(deleteArticleFailure(error.response.data.errors.global));
  }
}