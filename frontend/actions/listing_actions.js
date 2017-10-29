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

export const requestListingsByShop = (id) => {
  return (dispatch) => {
    return API_Util.fetchListings({filterByShop: id}).then((listings) => {
      dispatch(receiveListings(listings));
    });
  };
};

export const requestListingsByListing = (id) => {
  return (dispatch) => {
    return API_Util.fetchListings({filterByListing: id}).then((listings) => {
      dispatch(receiveListings(listings));
    });
  };
};

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
    return API_Util.createListing(listing).then((newListing) => {
      dispatch(receiveListing(newListing));
    });
  };
};

export const updateListing = (listing) => {
  return (dispatch) => {
    return API_Util.updateListing(listing).then((updatedListing) => {
      dispatch(receiveListing(updatedListing));
    });
  };
};
