import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ReviewIndex from './review_index';
import { requestReviewsByListing, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  let reviews = [];

  Object.values(state.entities.reviews).forEach((review) => {
    let newReview = Object.assign({}, review);
    newReview['user'] = state.entities.users[review.user_id];
    reviews.push(newReview);
  });

  const currentUserId = state.session.currentUser.id;

  return {
    reviews,
    currentUserId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const listingId = parseInt(ownProps.match.params.listingId);
  return {
    requestReviewsByListing: () => {
      return dispatch(requestReviewsByListing(listingId));
    },
    deleteReview: (id) => dispatch(deleteReview(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewIndex));
