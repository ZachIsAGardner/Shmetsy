export const fetchListings = (filter) => {
  return $.ajax({
    method: "GET",
    url: "/api/listings",
    data: filter
  });
};

export const fetchListing = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/listings/${id}`
  });
};

export const createListing = (listing) => {
  return $.ajax({
    url: "/api/listings",
    method: "POST",
    contentType: false,
    processData: false,
    data: listing
  });
};

export const updateListing = (listing, id) => {
  return $.ajax({
    url: `/api/listings/${id}`,
    method: "PATCH",
    contentType: false,
    processData: false,
    data: listing
  });
};
