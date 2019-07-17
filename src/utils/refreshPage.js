import { logoutUser, setAuthToken } from '@actions/auth';

const refreshPage = store => {
  const {
    auth: {
      user: { exp }
    }
  } = store.getState();
  if (exp < Math.floor(Date.now() / 1000)) {
    localStorage.removeItem('jwtToken');
    store.dispatch(logoutUser());
  } else {
    const token = localStorage.getItem('jwtToken');
    setAuthToken(token);
  }
};

export default refreshPage;
