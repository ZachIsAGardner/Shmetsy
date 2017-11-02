import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import ListingsHeader from './shop_manager_listings_header';
import ListingIndexContainer from '../listing/listing_index_container';
import ListingFormContainer from '../listing/listing_form_container';

class ShopManagerListings extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShop();
  }

  render() {
    return (
      <div className="shop-manager-listings">

        <Route exact path="/shops/:shopId/manage/listings" render={() => (<ListingsHeader props={this.props}/>)}></Route>
        <Switch>
          <Route path="/shops/:shopId/manage/listings/addlisting/:listingId/edit" component={ListingFormContainer}></Route>
          <Route path="/shops/:shopId/manage/listings/addlisting" component={ListingFormContainer}></Route>
          <Route path="/shops/:shopId/manage/listings/" render={() => (<ListingIndexContainer type="shop-manager"/>)}></Route>
        </Switch>

      </div>
    );
  }
}

export default ShopManagerListings;
