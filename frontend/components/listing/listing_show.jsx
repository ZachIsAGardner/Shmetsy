import React from 'react';
import { Link } from 'react-router-dom'

import ListingIndexContainer from './listing_index_container';

class ListingShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestListing();
  }

  render() {

    const listing = this.props.listing;
    const shop = this.props.listing.shop || {};

    return (
      <div className="listing-show">

        <section className="listing-show-shop">
          <div className="row">
            <Link className="shop-profile-image" to={`/shops/${shop.id}`}  style={{background: `url(${shop.img_profile})`}}></Link>
            <h2 className="shop-profile-shopname">{shop.shopname}</h2>
          </div>
          <ListingIndexContainer type="sub" />
        </section>

        <section className="listing-show-info">

          <section className="listing-show-info-sub">

            <div className="listing-show-info-images">
              <div className="listing-show-image-main" style={{background: `url(${listing.img_main})`}}></div>
            </div>

            <div className="listing-show-info-main">
              <h3>{listing.title}</h3>
              <h3>{`$${listing.price}`}</h3>
              <button>Add to Cart</button>
            </div>

          </section>

          <div className="listing-show-info-sub">
            <section className="listing-show-info-sub-left">
              <div>
                <h3>Details</h3>
                <p>{listing.description}</p>
              </div>
              <div className="listing-show-reviews">
                <h3>Reviews</h3>
                <p>reviews will go here</p>
              </div>
            </section>

            <aside>
              <ListingIndexContainer type="show" />
            </aside>
          </div>


        </section>
      </div>
    );
  }
}

export default ListingShow;
