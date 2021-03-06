import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import { closeModal } from '../actions/modal_actions';
import MyModal from './myModal';

import HeaderContainer from './header/header_container';
import CartContainer from './cart/cart_container';
import CreateShopContainer from './shop/create_shop_container';
import ShopManagerShowContainer from './shop/shop_manager_show_container';
import SessionFormContainer from './session/session_form_container';
import RemoveListing from './listing/remove_listing';

import ShopShowContainer from './shop/shop_show_container';
import StipulationsContainer from './listing/stipulations_container';
import ListingIndexContainer from './listing/listing_index_container';
import ListingShowContainer from './listing/listing_show_container';
import FeaturedListings from './listing/featured_listings';

import Footer from './footer/footer';

const App = (props) => {

  return (
    <div>
      <Switch>
        <Route path="/shops/:shopId/manage" component={ShopManagerShowContainer}/>
        <HeaderContainer />
      </Switch>

      <div className="app">

        <Route path="/create_shop" component={CreateShopContainer}></Route>
        <Route path="/cart" component={CartContainer} />

        <MyModal component={(props.modal === "login" || props.modal === "signup") ? SessionFormContainer : RemoveListing} modal={props.modal} closeModal={props.closeModal}/>

        <Route exact path="/" component={FeaturedListings} />
        <Route exact path="/" render={() => (<ListingIndexContainer type="recomended"/>)} />

        <div className="search-page">
          <Route path="/search" component={StipulationsContainer} />
          <Route path="/search" render={() => (<ListingIndexContainer type="search" />)} />
        </div>

        <Route exact path="/shops/:shopId" component={ShopShowContainer} />
        <Route path="/listings/:listingId" component={ListingShowContainer} />
      </div>

      <Footer props={props}/>
    </div>
  );
};

const mapStateToProps = (props) => {
  const modal = props.ui.modal;
  return {
    modal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
