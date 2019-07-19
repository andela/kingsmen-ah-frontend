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
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFjOTQ2ZDhkLWZiYzktNGEzMC1hMzM3LTA1NzMzMTUwZDU2MiIsImVtYWlsIjoiYWRleDAwMUBnbWFpbC5jb20iLCJpYXQiOjE1NjM1MzM0NTcsImV4cCI6MTU2NDIyNDY1N30.08focfpiekqhUG9QjiRu4E6829VuEsxvWH2ohceKwDg'
}
  const update = await axios.put('http://localhost:3000/api/v1/users', updateData, headers);
  dispatch({
    type: UPDATE_PROFILE,
    payload: update.data.payload
  })
}
