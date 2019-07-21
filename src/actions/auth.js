import axios from 'axios';
import { toast } from 'react-toastify';
import {
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  GET_PROFILE_ERROR,
  SET_CURRENT_USER,
  IS_LOADING,
  SET_PROFILE,
  LOGOUT_USER
} from './types';

axios.defaults.baseURL =
  'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';

export const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};
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
        type: GET_PROFILE_ERROR,
        payload: error.response.data.errors
      });
    }
    toast.error('Please check your network connection and try again');
  }
};

export const logoutUser = history => dispatch => {
  dispatch(isLoading(true));
  axios.post('/auth/logout');
  localStorage.removeItem('jwtToken');
  dispatch({ type: LOGOUT_USER });
  history.push('/');
  setAuthToken();
};

export const loginUser = userData => async dispatch => {
  try {
    dispatch(isLoading(true));

    const res = await axios.post('/auth/login', userData);
    const response = res.data.payload;

    const { token } = response;
    localStorage.setItem('jwtToken', token);

    const { id, email, username, exp } = response;
    const user = {
      id,
      email,
      username,
      exp
    };

    setAuthToken(token);
    dispatch(setCurrentUser(user));
    toast.success('Login successful');
    dispatch(getProfile(username));
    dispatch({ type: SIGNIN_SUCCESS });
  } catch (error) {
    if (error.response) {
      const errors = error.response.data.errors;
      if (errors.global) toast.error(errors.global);
      return dispatch({
        type: SIGNIN_FAILURE,
        payload: errors
      });
    }
    dispatch(isLoading(false));
    toast.error('Please check your network connection and try again');
  }
};
