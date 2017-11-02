import React from 'react';
import { Link } from 'react-router-dom';

import * as BasicUtil from '../../util/basic_util';

import ListingIndexContainer from '../listing/listing_index_container';

class ShopShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShop();
  }

  render() {
    if (this.props.shop) {
      return (

        <div className="shop-show">

          <section className="shop-banner" style={
              {backgroundImage: `url(${this.props.shop.img_banner})`}
            } />

          <section className="shop-info">

            <div className="shop-info-personal-container">

              <div className="cover-image" style={
                  {backgroundImage: `url(${this.props.shop.img_profile})`}
                } />

              <div className="shop-info-personal">
                <h2>{this.props.shop.shopname}</h2>
                <p>{this.props.shop.description}</p>
                <div className="shop-info-personal-sub">
                  <p className="light">{`${this.props.shop.location}`}</p>
                  <p className="super-light">|</p>
                  <p className="light">{`${this.props.shop.sales} sales`}</p>
                  <p className="super-light">|</p>
                  <p className="light">{`On Shmetsy since ${BasicUtil.timeify(this.props.shop.created_at).fullDate}`}</p>
                </div>
              </div>
            </div>

            <div className="shop-owner-profile">
              <h3>Shop Owner</h3>
              <div className="cover-image" style={
                  {backgroundImage: `url(${this.props.owner.img_url})`}
                } />
              <h3>{this.props.owner.username}</h3>
            </div>
          </section>

          <div className="shop-reel" />

          <ListingIndexContainer type="shop"/>

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
