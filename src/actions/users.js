import axios from "axios";
import { toast } from 'react-toastify';
import setAuthToken from "@utils/auth";
import API from "./api";
import { REGISTER_SUCCESS, REGISTER_FAILURE } from "./types";

const logger = console;
export const register = userData => dispatch => {
   axios
    .post(`${API}/users`, userData)
    .then(response => {
        logger.log(response, "hhhshsh");
      if (response.status === 201) {
          logger.log(response.data.payload.token, "ObjectRes");
        localStorage.setItem("token", response.data.payload.token);
        setAuthToken(response.data.token);
        dispatch({ type: REGISTER_SUCCESS, payload: response.data });
        toast.success('Registration successful');
        return response;
      }
      logger.log(response.data);
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAILURE, payload: err.response.data.errors });
      logger.log(err.response.data.errors[0], 'My erorr');
      toast.error('Invalid email');
      throw err;
    });
};

export default register;
