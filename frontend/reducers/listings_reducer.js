import merge from 'lodash/merge';

import { RECEIVE_LISTING, RECEIVE_LISTINGS, REMOVE_LISTING } from '../actions/listing_actions';
import { RECEIVE_SHOP } from '../actions/shop_actions';
import { ADD_LISTING_TO_CART, REMOVE_LISTING_FROM_CART } from '../actions/cart_actions';

const ListingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LISTING:
    case ADD_LISTING_TO_CART:
      newState = Object.assign({}, oldState);
      newState[action.listing.id] = action.listing;

      delete newState[action.listing.id]['owner'];
      delete newState[action.listing.id]['shop'];
      return newState;

    case RECEIVE_LISTINGS:
      newState = {};
      let newListings = Object.values(action.listings).map((listing) => {
        let newListing = Object.assign({}, listing);
        newState[newListing.id] = newListing;
        delete newState[newListing.id]['owner'];
        delete newState[newListing.id]['shop'];
      });
      return newState;

    case REMOVE_LISTING:
      newState = Object.assign({}, oldState);
      delete newState[action.listing.id];
      return newState;

    case REMOVE_LISTING_FROM_CART:
      newState = Object.assign({}, oldState);
      delete newState[action.listing.id];
      return newState;

    default:
      return oldState;
  }
};

export default ListingsReducer;
