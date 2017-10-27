import React from 'react';
import { Link } from 'react-router-dom';

import ShopManagerListingsContainer from './shop_manager_listings_container';

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
        </aside>

        <main className="shop-manager-content-container">
          <ShopManagerListingsContainer className="shop-manager-content" props={this.props}></ShopManagerListingsContainer>
        </main>
      </div>
    );
  }
}

export default ShopManagerShow;
