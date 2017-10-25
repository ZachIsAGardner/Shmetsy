import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session/session_form_container';
import ShopShowContainer from './shop/shop_show_container';
import ListingIndexContainer from './listing/listing_index_container';
import FeaturedListings from './listing/featured_listings';

const App = () => {
  return (
    <div>

      <HeaderContainer />
      <FeaturedListings />

      <Route exact path="/" type="recomended" render={() => (<ListingIndexContainer type="recomended"/>)} />

      <Route path="/shops" component={ShopShowContainer} />

      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </div>
  );
};

export default App;
