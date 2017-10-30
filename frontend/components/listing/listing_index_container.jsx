import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestListings } from '../../actions/listing_actions.js';
import { requestListingsByShop } from '../../actions/listing_actions.js';
import { requestListingsByListing } from '../../actions/listing_actions.js';
import { requestListingsByCart } from '../../actions/listing_actions.js';
import { deleteCarting } from '../../actions/cart_actions';
import ListingIndex from './listing_index';

import * as BasicUtil from '../../util/basic_util';

const mapStateToProps = (state, ownProps) => {
  const listings = Object.values(state.entities.listings).map((listing) => {
    let l = listing;
    if (state.session.currentUser) {
      l['quantity'] = BasicUtil.count(state.session.currentUser.cart, l.id);
    } else {
      l['quantity'] = 1;
    }
    return l;
  });

  return {
    listings: Object.values(state.entities.listings)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;

  if (ownProps.type === "cart") {
    action = () => dispatch(requestListingsByCart());
  } else if (ownProps.match.params.listingId) {
    action = () => dispatch(requestListingsByListing(ownProps.match.params.listingId));
  } else if (ownProps.match.params.shopId)  {
    action = () => dispatch(requestListingsByShop(ownProps.match.params.shopId));
  } else {
    action = () => dispatch(requestListings());
  }

  return {
    requestListings: action,
    deleteCarting: (id) => dispatch(deleteCarting(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingIndex));
