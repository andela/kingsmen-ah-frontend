import axios from 'axios';
import { toast } from 'react-toastify';
import { UPDATE_PROFILE, FETCH_GUEST_PROFILE, GET_GUEST_PROFILE_ERROR, RESET_PROFILE  } from './types';
import { isLoading, setUserProfile } from './auth';

export const updateUserProfile = payload => {
  return{
    type: UPDATE_PROFILE,
    payload,
  }
}

export const getGuestProfile = payload => {
  return {
    type: FETCH_GUEST_PROFILE,
    payload
  }
}
const instance = axios.create({
  headers: {}
});

export const fetchGuest = (username, history) => async dispatch => {
  try {
    dispatch({type: RESET_PROFILE })
    const res = await instance.get(`/profiles/${username}`);
    dispatch(getGuestProfile(res.data.payload));
    dispatch(isLoading(false));
  } catch (err) {
    if (err.response) {
      history.push('/notfound');
      return dispatch({
        type: GET_GUEST_PROFILE_ERROR,
        payload: err.response.data.errors
      });
    }
  }
}

export const updateProfile = payload => async dispatch => {
  try {
    dispatch(isLoading(true));
    const res = await axios.put('/users', payload);
    dispatch(setUserProfile(res.data.payload));
    dispatch(updateUserProfile(res.data.payload))
    toast.success('Profile successfully Updated!');
    dispatch(isLoading(false));
  } catch (err) {
    dispatch(isLoading(false));
  }
}
