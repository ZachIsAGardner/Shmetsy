import React from 'react';

import ListingIndexContainer from '../listing/listing_index_container';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cart = this.props.cart || "empty cart";

    return (
      <div>
        <h1>{cart.length} items in your cart</h1>
        <ListingIndexContainer type="cart"></ListingIndexContainer>
      </div>
    );

  }
}

export default Cart;
