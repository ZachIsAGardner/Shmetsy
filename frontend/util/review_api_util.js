export const fetchReviews = (filter) => {
  return $.ajax ({
    method: "GET",
    url: "/api/reviews",
    data: filter
  });
};

export const createReview = (review) => {
  return $.ajax ({
    method: "POST",
    url: "/api/reviews",
    data: { review }
  });
};

export const removeReview = (id) => {
  return $.ajax ({
    method: "DELETE",
    url: `/api/reviews/${id}`
  });
};
