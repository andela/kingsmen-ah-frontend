import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import article from './articles';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['errors']
};

const appReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  article
});

export default appReducer;
