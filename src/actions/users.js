import axios from "axios";
import { toast } from "react-toastify";
import setAuthToken from "@utils/auth";
import API from "./api";
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

export const register = userData => dispatch => {
  axios
    .post(`${API}/users`, userData)
    .then(response => {
      if (response.status === 201) {
        localStorage.setItem("token", response.data.payload.token);
        setAuthToken(response.data.token);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        toast.success("Registration successful");
        return response;
      }
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data});
    });
};

export default register;
