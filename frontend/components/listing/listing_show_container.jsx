import { connect } from 'react-redux';

import ListingShow from './listing_show';
import { requestListing } from '../../actions/listing_actions';
import { addListingToCart } from '../../actions/cart_actions';

const mapStateToProps = (state, ownProps) => {
  let listingId = parseInt(ownProps.match.params.listingId);
  const listing = state.entities.listings[listingId] || {};
  const shop = state.entities.shops[listing.shop_id] || {};
  const loggedIn = (state.session.currentUser) ? true : false;

  return {
    listing,
    shop,
    listingId,
    loggedIn
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
