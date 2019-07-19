/* eslint-disable no-console */
import axios from 'axios';
import { UPDATE_PROFILE, FETCH_PROFILE } from './actionTypes';

export const getUserProfile = (username) => dispatch => {
  axios.get(`http://localhost:3000/api/v1/profiles/${username}`)
  .then((res) => dispatch({
    type: FETCH_PROFILE,
    payload: res.data.payload
  }))
}

export const updateProfile = updateData => async dispatch => {
  const update = await axios.put('http://localhost:3000/api/v1/profiles/users', updateData);
  dispatch({
    type: UPDATE_PROFILE,
    payload: update.data.payload
  })
}
