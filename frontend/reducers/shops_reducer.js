import merge from 'lodash/merge';

import { RECEIVE_SHOP } from '../actions/shop_actions';

const ShopsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SHOP:
      const newShop = action.shop;
      return merge({}, { [newShop.id]: newShop });
    default:
      return oldState;
  }
};

export default ShopsReducer;
