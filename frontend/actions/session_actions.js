import * as API_Util from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    return API_Util.createUser(user).then((user) => {
      dispatch(receiveCurrentUser(user));
    });
  };
};

export const createSession = (user) => {
  return (dispatch) => {
    return API_Util.createSession(user).then((user) => {
      dispatch(receiveCurrentUser(user));
    });
  };
};

export const endSession = () => {
  return (dispatch) => {
    return API_UTIL.endSession().then(() => {
      dispatch(receiveCurrentUser(null));
    });
  };
};
