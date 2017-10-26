import merge from 'lodash/merge';

import { RECEIVE_SHOP } from '../actions/shop_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (!action.user) {
        return oldState;
      }
      const newUser = Object.assign({}, action.user);
      newUser.shop = newUser.shop.id || {};
      return merge({}, { [newUser.id]: newUser });
    case RECEIVE_SHOP:
      const newUser2 = Object.assign({}, action.shop.owner);
      if (newUser2.shop) {
        newUser2.shop = newUser2.shop.id;
      }
      
      return merge({}, { [newUser2.id]: newUser2 });
    default:
      return oldState;
  }
};

export default UsersReducer;
