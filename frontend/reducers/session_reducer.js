import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = null;
      if (action.user) {
        currentUser = {id: action.user.id};
        if (action.user.shop) {
          currentUser["shop"] = action.user.shop.id;
        }
      }
      return merge({}, { currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
