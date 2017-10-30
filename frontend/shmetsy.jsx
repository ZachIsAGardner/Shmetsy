import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

//test
import * as SessionUtil from './util/session_api_util';
import * as ShopUtil from './util/shop_api_util';
import * as ListingUtil from './util/listing_api_util';
import * as ReadTime from './util/time_util';
//test

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const user = window.currentUser;

    const shop = user.shop;
    user.shop = (shop) ? shop.id : {};

    let listings = {};
    user.cart_items.forEach((listing) => {
      listings[listing.id] = listing;
    });

    let preloadedState;

    if (shop) {
      preloadedState = {
        session: { currentUser: {
          id: user.id, shop: user.shop, cart: user.cart_items.map((listing) => listing.id)
          }
        },
        entities: {
          users: {
            [user.id]: user
          },
          shops: {
            [shop.id]: shop
          }
        }
      };
    } else {
      preloadedState = {
        session: { currentUser: {
          id: user.id, cart: user.cart_items.map((listing) => listing.id)
          }
        },
        entities: {
          users: {
            [user.id]: user
          }
        }
      };
    }

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
