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
    const user = window.currentUser;
    const shop = user.shop;
    user.shop = shop.id;

    const preloadedState = {
      session: { currentUser: {
        id: user.id, shopId: user.shop}
      },
      entities: {
        users: {
          [user.id]: user
        },
        shops: {
          [shop.id]: shop
        },
      }
    };

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
