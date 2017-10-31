import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { requestReviews, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  return {
    reviews: state.entities.reviews
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestReviews: () => {
      return dispatch(requestReviews());
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);
