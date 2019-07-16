import { logoutUser } from '@actions/auth';
import decodedToken from '../helpers/decodeToken';

const refreshPage = store => {
  if (localStorage.getItem('jwtToken')) {
    const {
      decoded: { exp }
    } = decodedToken();

    if (exp < Math.floor(Date.now() / 1000)) {
      localStorage.removeItem('jwtToken');
      store.dispatch(logoutUser());
    }
  }
};

export default refreshPage;
