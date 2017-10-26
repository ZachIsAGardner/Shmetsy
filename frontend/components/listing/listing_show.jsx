import React from 'react';

import ListingIndexContainer from './listing_index_container';

class ListingShow extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestListing();
  }

  render() {

    if (this.props.listing) {

      const listing = this.props.listing;
      const shop = this.props.listing.shop;

      return (
        <div className="listing-show">

          <section className="listing-show-shop">
            <div className="shop-profile-image" style={{background: `url(${shop.img_profile})`}}></div>
            <h3>{shop.shopname}</h3>
            <ListingIndexContainer type="sub" />
          </section>

          <section className="listing-show-info">

            <section className="listing-show-info-sub">

              <div className="listing-show-info-images">
                <div className="listing-show-image-main" style={{background: `url(${listing.img_main})`}}></div>
              </div>

              <div className="listing-show-info-main">
                <h4>{listing.title}</h4>
                <h4>{listing.price}</h4>
                <button>Add to Cart</button>
              </div>

            </section>

            <div className="listing-show-info-sub">
              <section>
                <p>{listing.description}</p>
              </section>

              <aside>
                <ListingIndexContainer type="shop" />
              </aside>
            </div>

          </section>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}

export default ListingShow;
