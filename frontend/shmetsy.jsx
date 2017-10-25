import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//test
import * as SessionUtil from './util/session_api_util';
import * as ShopUtil from './util/shop_api_util';
import * as ListingUtil from './util/listing_api_util';
//test

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
