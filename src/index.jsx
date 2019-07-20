import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import refreshPage from '@utils/refreshPage';
import App from './components/App';
import { store } from './store/configureStore';
import './index.css';

refreshPage(store);

const renderApp = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
};

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp);
}

renderApp();
