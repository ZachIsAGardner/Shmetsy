import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { ADD_LISTING_TO_CART, REMOVE_LISTING_FROM_CART } from '../actions/cart_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = null;
      if (action.user) {
        currentUser = {id: action.user.id};
        currentUser["cart"] = action.user.cart_items.map((listing) => listing.id);
        if (action.user.shop) {
          currentUser["shop"] = action.user.shop.id;
        }
      }
      return merge({}, { currentUser });

    case ADD_LISTING_TO_CART:
      newState = Object.assign({}, oldState);
      if (!newState.currentUser['cart']) {
        newState.currentUser['cart'] = [];
      }
      newState.currentUser['cart'].push(action.listing.id);
      return newState;

    case REMOVE_LISTING_FROM_CART:
      newState = Object.assign({}, oldState);

      const callback = (el) => {
        return (val) => el !== val;
      };

      newState.currentUser.cart = newState.currentUser.cart.filter(callback(action.listing.id));

      return newState;

    default:

      return oldState;
  }
};

export default sessionReducer;
