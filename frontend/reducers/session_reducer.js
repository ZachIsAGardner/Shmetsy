import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';

const sessionReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.user;
      return merge({}, { currentUser });
    default:
      return oldState;
  }
};

export default sessionReducer;
