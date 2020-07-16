import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store';
import { serviceWorkerInitAction, serviceWorkerUpdateAction } from './actions/worker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register({
  onSuccess: registration => {
    store.dispatch(serviceWorkerInitAction(registration))
  },
  onUpdate: registration => {
    store.dispatch(serviceWorkerUpdateAction(registration))
  },
});