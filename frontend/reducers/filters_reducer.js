import { UPDATE_FILTER } from '../actions/filter_actions';

const FiltersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState;

  switch (action.type) {
    case UPDATE_FILTER:
      newState = Object.assign({}, oldState);
      newState[action.filter] = action.value;
      return newState;
    default:
      return oldState;
  }
};

export default FiltersReducer;
