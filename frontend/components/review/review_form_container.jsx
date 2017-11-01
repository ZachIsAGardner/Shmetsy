import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {

  let review = {body: "", rating: 5};
  review['user_id'] = state.session.currentUser.id;
  review['listing_id'] = ownProps.match.params.listingId;

  return {
    review
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createReview: (review) => dispatch(createReview(review))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));
