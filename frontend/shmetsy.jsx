import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  let preloadedState = {};

  if (window.currentUser) {
    const user = window.currentUser;
    const shop = user.shop;
    user.shop = (shop) ? shop.id : {};

    let listings = {};
    user.cart_items.forEach((listing) => {
      listings[listing.id] = listing;
    });

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
    delete window.currentUser;
  }

  store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
