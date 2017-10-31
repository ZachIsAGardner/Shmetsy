import merge from 'lodash/merge';

import { RECEIVE_SHOP } from '../actions/shop_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_LISTINGS } from '../actions/listing_actions';

const ShopsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_SHOP:

      newState = Object.assign({}, oldState);
      const newShop2 = Object.assign({}, action.shop);
      newShop2.owner_id = action.shop.owner.id;

      newState[newShop2.id] = newShop2;

      return newState;

    case RECEIVE_LISTINGS:
      newState = Object.assign({}, oldState);

      let listingShops = Object.values(action.listings).map((listing) => listing.shop);

      listingShops.forEach((shop) => {
        newState[shop.id] = shop;
      });

      return newState;

    case RECEIVE_CURRENT_USER:
      if (!action.user || !action.user.shop) {
        return oldState;
      }
      const newShop = action.user.shop;

      newState = Object.assign({}, oldState);
      newState[newShop.id] = newShop;

      return newState;

    default:
      return oldState;
  }
};

export default ShopsReducer;
