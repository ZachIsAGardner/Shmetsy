import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import SessionFormContainer from './session/session_form_container';
import ShopShowContainer from './shop/shop_show_container';
import ListingIndexContainer from './listing/listing_index_container';
import ListingShowContainer from './listing/listing_show_container';
import FeaturedListings from './listing/featured_listings';
import Footer from './footer/footer';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route exact path="/" component={FeaturedListings} />

      <Route exact path="/" render={() => (<ListingIndexContainer type="recomended"/>)} />

      <Route path="/shops" component={ShopShowContainer} />
      <Route path="/listings/:id" component={ListingShowContainer} />

      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />

      <Footer />
    </div>
  );
};

export default App;
