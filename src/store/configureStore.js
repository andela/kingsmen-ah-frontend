import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '@reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const devTools = [
  applyMiddleware(thunk),
  ...(window.__REDUX_DEVTOOLS_EXTENSION__
    ? [window.__REDUX_DEVTOOLS_EXTENSION__()]
    : [])
];

const store = createStore(persistedReducer, compose(...devTools));

const persistor = persistStore(store);

export { store, persistor };
