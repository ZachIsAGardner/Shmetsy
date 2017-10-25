import merge from 'lodash/merge';

import { RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listing_actions';

const ListingsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LISTINGS:
      return action.listings;
    case RECEIVE_LISTING:
      return merge({}, { [action.listing.id]: action.listing });
    default:
      return oldState;
  }
};

export default ListingsReducer;
