import axios from 'axios';
import {
  GET_COMMENTS, GET_ERRORS, POST_COMMENT, DELETE_COMMENT
} from './types';

// Get all comments
export const getComments = () => (dispatch) => {
  axios.get('/articles/:slug/comments')
    .then(res => dispatch({
      type: GET_COMMENTS,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Post a comment
export const postComment = (newComment) => (dispatch) => {
  axios.post('/articles/:slug/comments', newComment)
    .then(res => dispatch({
      type: POST_COMMENT,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

// Delete a comment
export const delComment = (id) => (dispatch) => {
  axios.delete(`/articles/:slug/comments/${id}`)
    .then(res => dispatch({
      type: DELETE_COMMENT,
      payload: res.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};
