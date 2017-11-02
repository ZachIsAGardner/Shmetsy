import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import ShopManagerListingsContainer from './shop_manager_listings_container';
import CreateShopContainer from './create_shop_container';

class ShopManagerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShop();
  }

  render() {
    return (
      <div className="shop-manager">

        <aside className="shop-manager-sidebar">
          <h3>Shop Manager</h3>
          <Link to="/">Shmetsy Marketplace</Link>
          <Link to={`/shops/${this.props.shop.id}/manage/listings`}>Listings</Link>
          <Link to={`/shops/${this.props.shop.id}/manage/settings`}>Settings</Link>
          <Link to={`/shops/${this.props.shop.id}`}>Shop Page</Link>
        </aside>

        <main className="shop-manager-content-container">
            <Route path='/shops/:shopId/manage/listings' render={() => (
                <ShopManagerListingsContainer
                  className="shop-manager-content"
                  props={this.props} />
              )}>
            </Route>
            <Route path='/shops/:shopId/manage/settings' component={CreateShopContainer}></Route>
        </main>

      </div>
    );
  }
}

export default ShopManagerShow;
