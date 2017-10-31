import { connect } from 'react-redux';

import ReviewIndex from './review_index';
import { requestReviews, deleteReview } from '../../actions/review_actions';

const mapStateToProps = (state) => {
  let reviews = [];

  Object.values(state.entities.reviews).forEach((review) => {
    let newReview = Object.assign({}, review);
    newReview['user'] = state.entities.users[review.user_id];
    reviews.push(newReview);
  });

  return {
    reviews
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
