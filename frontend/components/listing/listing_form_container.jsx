import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ListingForm from './listing_form';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = (state, ownProps) => {
  let listing = {title: "", description: "", stock: 1};
  const shopId = ownProps.match.params.shopId;
  return {
    listing,
    shopId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    formAction: (listing) => dispatch(createListing(listing))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListingForm));
