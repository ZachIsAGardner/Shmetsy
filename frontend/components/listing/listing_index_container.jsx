import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestListings } from '../../actions/listing_actions.js';
import { requestListingsByShop } from '../../actions/listing_actions.js';
import { requestListingsByListing } from '../../actions/listing_actions.js';
import ListingIndex from './listing_index';

const mapStateToProps = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  
  if (ownProps.match.params.listingId) {
    action = () => dispatch(requestListingsByListing(ownProps.match.params.listingId));
  } else if (ownProps.match.params.shopId)  {
    action = () => dispatch(requestListingsByShop(ownProps.match.params.shopId));
  } else {
    action = () => dispatch(requestListings());
  }

  return {
    requestListings: action
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));
