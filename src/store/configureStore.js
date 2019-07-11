import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '@reducers/rootReducer';

const enhancers = [];
const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middlewares), ...enhancers);

export default createStore(rootReducer, composeWithDevTools(composedEnhancers));
