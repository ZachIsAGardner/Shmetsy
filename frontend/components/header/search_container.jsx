import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateFilter } from '../../actions/filter_actions';
import { requestListingsByFilter } from '../../actions/listing_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => {
  let filter = {low: undefined, high: undefined};
  filter['title'] = ownProps.location.search.split("=")[1];
  return {
    filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestListings: () => dispatch(requestListingsByFilter()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
