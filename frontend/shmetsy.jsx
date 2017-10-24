import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//test
import * as API_Util from './util/session_api_util';
//test

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.Util = API_Util;
  //test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});