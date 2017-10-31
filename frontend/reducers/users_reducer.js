import merge from 'lodash/merge';

import { RECEIVE_SHOP } from '../actions/shop_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';
import { RECEIVE_REVIEWS } from '../actions/review_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = {};
  let newUser = {};

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return oldState;
      }
      newUser = Object.assign({}, action.user);
      if (newUser.shop) {
        newUser.shop = newUser.shop.id;
      }

      newState = Object.assign({}, oldState);
      newState[newUser.id] = newUser;

      return newState;

    case RECEIVE_SHOP:
      newUser = Object.assign({}, action.shop.owner);
      newUser.shop = action.shop.id;

      newState = Object.assign({}, oldState);
      newState[newUser.id] = newUser;

      return newState;

    case RECEIVE_LISTINGS:
      newState = Object.assign({}, oldState);
      let listingOwners = Object.values(action.listings).map((listing) => listing.owner);
      listingOwners.forEach((user) => {
         newState[user.id] = user;
      });

      return newState;

    case RECEIVE_REVIEWS:
      newState = Object.assign({}, oldState);

      let reviewOwners = Object.values(action.reviews).map((review) => review.user);
      reviewOwners.forEach((user) => {
         newState[user.id] = user;
      });

      return newState;

    default:
      return oldState;
  }
};

export default UsersReducer;
