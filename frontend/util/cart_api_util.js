export const createCarting = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/listings/${id}/purchase`,
  });
};
