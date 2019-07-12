import axios from 'axios';
import { toast } from 'react-toastify';
import setAuthToken from '../utilities/setAuthToken';
import { GET_ERRORS, SET_CURRENT_USER } from './types';

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const loginUser = userData => dispatch => {
  axios
    .post('auth/login', userData)
    .then(res => {
      const response = res.data.payload;

      const { token } = response;
      localStorage.setItem('jwtToken', token);

      setAuthToken(token);

      const { id, email, username } = response;
      const user = {
        id,
        email,
        username
      };

      // localStorage.setItem('user', JSON.stringify(user));

      dispatch(setCurrentUser(user));
      toast.success('Login successful');
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data.errors
      });
    });
};
