import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import comments from './comments';
import auth from './auth';
import profile from './profile';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['errors']
};

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  profile,
  comments
});

export default appReducer;
