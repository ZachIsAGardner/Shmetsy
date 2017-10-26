import * as API_Util from '../util/listing_api_util';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';

const receiveListings = (listings) => {
  return {
    type: RECEIVE_LISTINGS,
    listings
  };
};

const receiveListing = (listing) => {
  return {
    type: RECEIVE_LISTING,
    listing
  };
};

export const requestListings = () => {
  return (dispatch) => {
    return API_Util.fetchListings().then((listings) => {
      dispatch(receiveListings(listings));
    });
  };
};

//requestlistingsbyowner

//requestrelevantlistings

//requestfeaturedlistings

export const requestListing = (id) => {
  return (dispatch) => {
    return API_Util.fetchListing(id).then((listing) => {
      dispatch(receiveListing(listing));
    });
  };
};

export const createListing = (listing) => {
  return (dispatch) => {
    return API_Util.createListing(listing).then((listing) => {
      dispatch(receiveListing(listing));
    });
  };
};

export const updateListing = (listing) => {
  return (dispatch) => {
    return API_Util.updateListing(listing).then((listing) => {
      dispatch(receiveListing(listing));
    });
  };
};
