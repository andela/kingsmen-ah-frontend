import { combineReducers } from 'redux';
import auth from './auth';
import article from './articles';


const appReducer = combineReducers({
  auth,
  article
});

export default appReducer;
