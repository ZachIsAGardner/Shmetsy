import { combineReducers } from 'redux';

import ShopsReducer from './shops_reducer';

const EntitiesReducer = combineReducers({
  shops: ShopsReducer
});

export default EntitiesReducer;
