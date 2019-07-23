import axios from 'axios';
import {
  GET_COMMENTS, GET_COMMENTS_ERROR, POST_COMMENT, POST_COMMENT_ERROR, DELETE_COMMENT, DELETE_COMMENT_ERROR
} from './types';

// Get all comments
export const getComments = (slug) => async (dispatch) => {
  try {
    const res = await axios.get(`/articles/${slug}/comments`)
    dispatch({
      type: GET_COMMENTS,
      payload: res.data.payload
    })
  } catch (err) {
    dispatch({
      type: GET_COMMENTS_ERROR,
      payload: err.response.data
    })
  }
};

// Post a comment
export const postComment = (newComment, slug) => async (dispatch) => {
  try{
    const res = await axios.post(`/articles/${slug}/comments`, newComment);
    // eslint-disable-next-line no-console
    console.log(res)
    dispatch({
      type: POST_COMMENT,
      payload: res.data.payload
    })
  } catch (err) {
    dispatch({
      type: POST_COMMENT_ERROR,
      payload: err.response.data
    })
  }
};

// Delete a comment
export const delComment = (id, slug) => async (dispatch) => {
  try{
    await axios.delete(`/articles/${slug}/comments/${id}`);
    dispatch({
      type: DELETE_COMMENT,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: DELETE_COMMENT_ERROR,
      payload: err.response.data
    })
  }
};
