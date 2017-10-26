import { connect } from 'react-redux';

import ListingShow from './listing_show';
import { requestListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  let listingId = ownProps.location.pathname.split("/");
  listingId = listingId[listingId.length - 1];

  return {
    listing: state.entities.listings[listingId] || {},
    listingId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let listingId = ownProps.location.pathname.split("/");
  listingId = listingId[listingId.length - 1];

  return {
    requestListing: () => dispatch(requestListing(listingId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
