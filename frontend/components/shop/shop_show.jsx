import React from 'react';
import { Link } from 'react-router-dom';

class ShopShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShop(this.props.shopId);
  }

  render() {
    if (this.props.shop) {
      return (
        <div className="shop-show">
            
          <div className="shop-banner">
            <img src={this.props.shop.img_banner} alt="shop banner"></img>
          </div>

          <div className="shop-info">
            <h2>{this.props.shop.shopname}</h2>
            <img src={this.props.shop.img_profile} alt="shop profile"></img>
          </div>

        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default ShopShow;
