import React from 'react';
import { Link } from 'react-router-dom';

import ListingIndexContainer from '../listing/listing_index_container';

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
        <h1>Listings</h1>
        <ListingIndexContainer type="shop"></ListingIndexContainer>
        <Link to={`/shops/${this.props.shop.id}/addlisting`}>Add Listing</Link>
      </div>
    );
  }
}

export default ShopManagerListings;
