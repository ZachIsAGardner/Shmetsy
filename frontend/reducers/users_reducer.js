import merge from 'lodash/merge';

import { RECEIVE_SHOP } from '../actions/shop_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return oldState;
      }
      const newUser = Object.assign({}, action.user);
      if (newUser.shop) {
        newUser.shop = newUser.shop.id;
      }

      const newState = Object.assign({}, oldState);
      newState[newUser.id] = newUser;

      return newState;

    case RECEIVE_SHOP:
      const newUser2 = Object.assign({}, action.shop.owner);
      newUser2.shop = action.shop.id;

      const newState2 = Object.assign({}, oldState);
      newState2[newUser2.id] = newUser2;

      return newState2;

    case RECEIVE_LISTINGS:

      const newState3 = Object.assign({}, oldState);
      let listingOwners = Object.values(action.listings).map((listing) => listing.owner);
      listingOwners.forEach((user) => {
         newState3[user.id] = user;
      });

      return newState3;

    default:
      return oldState;
  }
};

export default UsersReducer;
