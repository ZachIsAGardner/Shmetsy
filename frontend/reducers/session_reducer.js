import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { ADD_LISTING_TO_CART } from '../actions/cart_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

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
      const newState = Object.assign({}, oldState);
      if (!newState.currentUser['cart']) {
        newState.currentUser['cart'] = [];
      }
      newState.currentUser['cart'].push(action.listing.id);
      return newState;
    default:

      return oldState;
  }
};

export default sessionReducer;
