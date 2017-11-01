import { requestListingsByFilter } from './listing_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

const changeFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  };
};

export const updateFilter = (filter, value) => {
  return (dispatch) => {
    dispatch(changeFilter(filter, value));
  };
};
