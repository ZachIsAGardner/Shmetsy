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

          <section className="shop-banner">
            <img src={this.props.shop.img_banner} alt="shop banner"></img>
          </section>

          <section className="shop-info">
            <img src={this.props.shop.img_profile} alt="shop profile"></img>

            <div className="shop-info-personal">
              <h2>{this.props.shop.shopname}</h2>
              <p>{this.props.shop.description}</p>
              <div className="shop-info-personal-sub">
                <p>{`${this.props.shop.location}`}</p>
                <p>{`${this.props.shop.sales} sales`}</p>
                <p>{`On Shmetsy since ${this.props.shop.created_at}`}</p>
              </div>
            </div>

            <div className="shop-owner-profile">
              <h3>Shop Owner</h3>
              <img src={this.props.shop.owner.img_url}></img>
              <h3>{this.props.shop.owner.username}</h3>
            </div>
          </section>

          <div className="shop-reel" />

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
