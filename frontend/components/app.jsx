import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import { closeModal } from '../actions/modal_actions';
import MyModal from './myModal';

import HeaderContainer from './header/header_container';
import CartContainer from './cart/cart_container';
import ShopManagerShowContainer from './shop/shop_manager_show_container';
import SessionFormContainer from './session/session_form_container';

import ShopShowContainer from './shop/shop_show_container';
import Stipulations from './listing/stipulations';
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

        <Route path="/cart" component={CartContainer} />

        <MyModal component={SessionFormContainer} modal={props.modal} closeModal={props.closeModal}/>

        <Route exact path="/" component={FeaturedListings} />
        <Route exact path="/" render={() => (<ListingIndexContainer type="recomended"/>)} />

      

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
