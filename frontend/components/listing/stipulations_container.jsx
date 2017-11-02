import { connect } from 'react-redux';

import { updateFilter } from '../../actions/filter_actions';
import { requestListingsByFilter } from '../../actions/listing_actions';
import Stipulations from './stipulations';

const mapStateToProps = (state, ownProps) => {
  let filter = {low: undefined, high: undefined};
  filter['title'] = ownProps.location.search.split("=")[1];
  return {
    filter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestListings: () => dispatch(requestListingsByFilter()),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Stipulations);
