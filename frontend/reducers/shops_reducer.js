import merge from 'lodash/merge';

import { RECEIVE_SHOP } from '../actions/shop_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const ShopsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return oldState;
      }
      const newShop = action.user.shop;
      return merge({}, { [newShop.id]: newShop });
    case RECEIVE_SHOP:
  
      const newShop2 = Object.assign({}, action.shop);
      newShop2.owner_id = action.shop.owner.id;

      return merge({}, { [newShop2.id]: newShop2 });
    default:
      return oldState;
  }
};

export default ShopsReducer;
