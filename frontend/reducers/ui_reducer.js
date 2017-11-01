import { combineReducers } from 'redux';

import modal from './modals_reducer';
import filter from './filters_reducer';

export default combineReducers({
  modal,
  filter
});
