import { connect } from 'react-redux';

import ListingShow from './listing_show';
import { requestListing } from '../../actions/listing_actions';
import { addListingToCart } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
  let listingId = parseInt(ownProps.match.params.listingId);

  return {
    listing: state.entities.listings[listingId] || {},
    listingId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let listingId = ownProps.match.params.listingId;

  return {
    requestListing: () => dispatch(requestListing(listingId)),
    addListingToCart: () => dispatch(addListingToCart(listingId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);
