import * as API_Util from '../util/shop_api_util';

export const RECEIVE_SHOP = 'RECEIVE_SHOP';
export const GIVE_SESSION_SHOP = 'GIVE_SESSION_SHOP';

const receiveShop = (shop) => {
  return {
    type: RECEIVE_SHOP,
    shop
  };
};

const giveSessionShop = (shop) => {
  return {
    type: GIVE_SESSION_SHOP,
    shop
  };
};

export const fetchShop = (id) => {
  return (dispatch) => {
    return API_Util.fetchShop(id).then((shop) => {
      dispatch(receiveShop(shop));
    });
  };
};

export const createShop = (shop) => {
  return (dispatch, fetchState) => {
    return API_Util.createShop(shop).then((newShop) => {
      dispatch(receiveShop(newShop));
      dispatch(giveSessionShop(newShop));
    });
  };
};

export const editShop = (shop) => {
  return (dispatch) => {
    return API_Util.editShop(shop).then((editedShop) => {
      dispatch(receiveShop(editedShop));
    });
  };
};
