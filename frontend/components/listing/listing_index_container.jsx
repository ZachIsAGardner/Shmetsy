import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { requestListings } from '../../actions/listing_actions.js';
import ListingIndex from './listing_index';

const mapStateToProps = (state, ownProps) => {
  return {
    listings: Object.values(state.entities.listings)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestListings: () => dispatch(requestListings())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);
