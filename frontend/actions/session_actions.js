import * as API_Util from '../util/session_api_util';
import { closeModal } from './modal_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    return API_Util.createUser(user).then((user) => {
      dispatch(closeModal());
      dispatch(receiveCurrentUser(user));
    }, (err) => {
      dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const createSession = (user) => {
  return (dispatch) => {
    return API_Util.createSession(user).then((user) => {
      dispatch(closeModal());
      dispatch(receiveCurrentUser(user));
    }, (err) => {
      dispatch(receiveErrors(err.responseJSON));
    });
  };
};

export const endSession = () => {
  return (dispatch) => {
    return API_Util.endSession().then((user) => {
      dispatch(receiveCurrentUser(null));
    });
  };
};
