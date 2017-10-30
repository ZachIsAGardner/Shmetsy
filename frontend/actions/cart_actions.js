import * as API_Util from '../util/cart_api_util';

export const ADD_LISTING_TO_CART = 'ADD_LISTING_TO_CART';

const receiveCarting = (listing) => {
  return {
    type: ADD_LISTING_TO_CART,
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
