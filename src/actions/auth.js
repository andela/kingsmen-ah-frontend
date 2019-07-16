import axios from '@config/axios';
import { toast } from 'react-toastify';
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  IS_LOADING,
  SET_PROFILE,
  LOGOUT_USER
} from './types';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const isLoading = value => ({
  type: IS_LOADING,
  payload: value
});

export const setUserProfile = payload => ({
  type: SET_PROFILE,
  payload
});

export const getProfile = username => async dispatch => {
  try {
    const res = await axios.get(`/profiles/${username}`);
    dispatch(setUserProfile(res.data.payload));
  } catch (error) {
    if (error.response) {
      return dispatch({
        type: GET_ERRORS,
        payload: error.response.data.errors
      });
    }
    toast.error('Please check your network connection and try again');
  }
};

export const logoutUser = history => async dispatch => {
  try {
    dispatch(isLoading(true));
    await axios.post('/auth/logout');
    localStorage.removeItem('jwtToken');
    dispatch({ type: LOGOUT_USER });
    history.push('/');
  } catch (error) {
    if (error.response) {
      return dispatch({
        type: GET_ERRORS,
        payload: error.response.data.errors
      });
    }
    dispatch(isLoading(false));
    toast.error('Please check your network connection and try again');
  }
};

export const loginUser = userData => async dispatch => {
  try {
    dispatch(isLoading(true));

    const res = await axios.post('/auth/login', userData);
    const response = res.data.payload;

    const { token } = response;
    localStorage.setItem('jwtToken', token);

    const { id, email, username } = response;
    const user = {
      id,
      email,
      username
    };

    dispatch(setCurrentUser(user));
    toast.success('Login successful');
    dispatch(getProfile(username));
  } catch (error) {
    if (error.response) {
      return dispatch({
        type: GET_ERRORS,
        payload: error.response.data.errors
      });
    }
    dispatch(isLoading(false));
    toast.error('Please check your network connection and try again');
  }
};
