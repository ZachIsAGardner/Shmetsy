import { combineReducers } from 'redux';

import ShopsReducer from './shops_reducer';
import ListingsReducer from './listings_reducer';
import UsersReducer from './users_reducer';

const EntitiesReducer = combineReducers({
  shops: ShopsReducer,
  listings: ListingsReducer,
  users: UsersReducer
});

export default EntitiesReducer;
