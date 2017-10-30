import React from 'react';

import * as BasicUtil from '../../util/basic_util';
import ListingIndexContainer from '../listing/listing_index_container';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cart = this.props.cart || "empty cart";

    let total = 0;
    if (this.props.cart[0]) {
      this.props.cart.forEach((item) => {
        total += item.price;
      });
    }

    return (
      <div className="cart">
        <h1>{cart.length} items in your cart</h1>
        <div className="cart-main">
          <ListingIndexContainer type="cart"></ListingIndexContainer>
          <div className="checkout">
            <p>{`Total: ${BasicUtil.moneyify(total)}`}</p>
            <button>Proceed to checkout</button>
          </div>
        </div>
      </div>
    );

  }
}

export default Cart;
