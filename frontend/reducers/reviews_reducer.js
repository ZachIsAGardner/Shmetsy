import { RECEIVE_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';

const ReviewsReducer = (oldState = {}, action) => {

  Object.freeze(oldState);
  let newState;
  switch (action.type) {
    case RECEIVE_REVIEWS:
      newState = {};
      Object.values(action.reviews).forEach((review) => {
        let newReview = Object.assign({}, review);
        delete newReview['user'];
        newState[newReview.id] = newReview;
      });
      return newState;

    case RECEIVE_REVIEW:
      newState = Object.assign({}, oldState);
      newState[action.review.id] = action.review;
      return newState;

    case REMOVE_REVIEW:
      newState = Object.assign({}, oldState);
      delete newState[action.review.id];
      return newState;

    default:
      return oldState;
  }
};

export default ReviewsReducer;
