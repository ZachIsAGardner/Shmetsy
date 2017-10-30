export const createCarting = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/listings/${id}/purchase`,
  });
};

export const deleteCarting = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/listings/${id}/remove`
  });
};
