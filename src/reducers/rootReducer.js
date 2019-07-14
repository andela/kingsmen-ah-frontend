import { combineReducers } from 'redux';
import auth from './auth';
import comments from './comments';


const appReducer = combineReducers({
  auth,
  comments
});

export default appReducer;
