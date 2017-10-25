import { combineReducers } from 'redux';

import ShopsReducer from './shops_reducer';
import ListingsReducer from './listings_reducer';

const EntitiesReducer = combineReducers({
  shops: ShopsReducer,
  listings: ListingsReducer
});

export default EntitiesReducer;
