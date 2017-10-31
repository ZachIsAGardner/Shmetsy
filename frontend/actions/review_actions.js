import * as API_Util from '../util/review_api_util';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = (reviews) => {
  return {
    type: RECEIVE_REVIEWS,
    reviews
  };
};

const receiveReview = (review) => {
  return {
    type: RECEIVE_REVIEW,
    review
  };
};

const removeReview = (review) => {
  return {
    type: REMOVE_REVIEW,
    review
  };
};

export const requestReviews = () => {
  return (dispatch) => {
    return API_Util.fetchReviews().then((reviews) => {
      dispatch(receiveReviews(reviews));
    });
  };
};

export const requestReviewsByListing = (listingId) => {
  return (dispatch) => {
    return API_Util.fetchReviews({filterByListing: listingId}).then((reviews) => {
      dispatch(receiveReviews(reviews));
    });
  };
};

export const createReview = (review) => {
  return (dispatch) => {
    return API_Util.createReview(review).then((createdReview) => {
      dispatch(receiveReview(createdReview));
    });
  };
};

// export const requestReview = (reviewId) => {
//   return (dispatch) => {
//     return API_Util.fetchReview(reviewId).then((review) => {
//       dispatch(receiveReview(review));
//     });
//   };
// };
//
// export const deleteReview = (reviewId) => {
//   return (dispatch) => {
//     return API_Util.removeReview(reviewId).then((review) => {
//       dispatch(removeReview(review));
//     });
//   };
// };
