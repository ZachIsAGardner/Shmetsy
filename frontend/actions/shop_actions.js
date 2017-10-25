import * as API_Util from '../util/shop_api_util';

export const RECEIVE_SHOP = 'RECEIVE_SHOP';

const receiveShop = (shop) => {
  return {
    type: RECEIVE_SHOP,
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
  return (dispatch) => {
    return API_Util.createShop(shop).then((shop) => {
      dispatch(receiveShop(shop));
    });
  };
};

export const editShop = (shop) => {
  return (dispatch) => {
    return API_Util.editShop(shop).then((shop) => {
      dispatch(receiveShop(shop));
    });
  };
};
