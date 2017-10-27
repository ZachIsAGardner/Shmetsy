import React from 'react';

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
        <h2>{`Greetings, ${this.props.owner.username}`}</h2>
        <ShopManagerListingsContainer props={this.props}></ShopManagerListingsContainer>
      </div>
    );
  }
}

export default ShopManagerShow;
