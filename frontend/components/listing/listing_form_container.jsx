import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ListingForm from './listing_form';
import { createListing, updateListing, requestListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  let listing = {
    title: "",
    description: "",
    price: 2,
    stock: 1,
    shop_id: state.session.currentUser.shop,
    owner_id: state.session.currentUser.id,
    img_main: "https://pbs.twimg.com/profile_images/507251035929190400/BDUL3Uzt_400x400.png"
  };
  let listingId;
  let formType = "new";

  if (ownProps.match.params.listingId) {
    listingId = ownProps.match.params.listingId;
    const oldListing = state.entities.listings[ownProps.match.params.listingId];
    listing = {
      title: oldListing.title,
      description: oldListing.description,
      price: oldListing.price,
      stock: oldListing.stock,
      shop_id: oldListing.shop_id,
      owner_id: oldListing.owner_id,
      img_main: oldListing.img_main
    };
    debugger
    formType = "edit";
  }

  const shopId = ownProps.match.params.shopId;
  return {
    listing,
    listingId,
    shopId,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.match.params.listingId) ? updateListing : createListing;

  return {
    formAction: (listing) => dispatch(action(listing)),
    requestListing: (id) => dispatch(requestListing(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingForm));
