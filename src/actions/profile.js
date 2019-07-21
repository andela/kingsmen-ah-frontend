import axios from 'axios';
import { toast } from 'react-toastify';
import { UPDATE_PROFILE } from './types';
import { isLoading, setUserProfile } from './auth';

axios.defaults.baseURL =
  'https://kingsmen-ah-backend-staging.herokuapp.com/api/v1';

export const updateUserProfile = payload => {
  return{
    type: UPDATE_PROFILE,
    payload,
  }
}

export const updateProfile = payload => async dispatch => {
  try {
    dispatch(isLoading(true));
    const res = await axios.put('/users', payload);
    dispatch(setUserProfile(res.data.payload));
    dispatch(updateUserProfile(res.data.payload))
    toast.success('Profile successfully Updated!');
  } catch (err) {
    dispatch(isLoading(false));
  }
}
