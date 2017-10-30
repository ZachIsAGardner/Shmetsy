import * as API_Util from '../util/cart_api_util';

export const ADD_LISTING_TO_CART = 'ADD_LISTING_TO_CART';
export const REMOVE_LISTING_FROM_CART = 'REMOVE_LISTING_FROM_CART';

const receiveCarting = (listing) => {
  return {
    type: ADD_LISTING_TO_CART,
    listing
  };
};

const removeCarting = (listing) => {
  return {
    type: REMOVE_LISTING_FROM_CART,
    listing
  };
};

export const addListingToCart = (id) => {
  return (dispatch) => {
    return API_Util.createCarting(id).then((listing) => {
      dispatch(receiveCarting(listing));
    });
  };
};

export const deleteCarting = (id) => {
  return (dispatch) => {
    return API_Util.deleteCarting(id).then((listing) => {
      dispatch(removeCarting(listing));
    });
  };
};
