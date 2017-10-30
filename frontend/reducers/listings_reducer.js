import merge from 'lodash/merge';

import { RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listing_actions';
import { RECEIVE_SHOP } from '../actions/shop_actions';
import { ADD_LISTING_TO_CART} from '../actions/cart_actions';

const ListingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LISTING:
    case ADD_LISTING_TO_CART:
      const newState = Object.assign({}, oldState);
      newState[action.listing.id] = action.listing;
      return newState;
    case RECEIVE_LISTINGS:
      return action.listings;
    default:
      return oldState;
  }
};

export default ListingsReducer;
