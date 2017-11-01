import React from 'react';
import { Link } from 'react-router-dom';

import * as BasicUtil from '../../util/basic_util';
import ListingIndexContainer from './listing_index_container';
import ReviewIndexContainer from '../review/review_index_container';
import ReviewFormContainer from '../review/review_form_container';

class ListingShow extends React.Component{
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentDidMount() {
    this.props.requestListing();
  }

  componentDidUpdate() {
    this.props.requestReviews();
  }

  handleAddToCart() {
    if (this.props.loggedIn) {
      this.props.addListingToCart();
      this.props.history.push("/cart");
    } else {
      this.props.openModal("login");
    }
  }

  render() {
    const listing = this.props.listing;
    const shop = this.props.shop;
    const price = this.props.listing.price || 0;
    const shopImage = shop.img_profile || '';
    const listingImage = listing.image_url || '';

    const reviewForm = (this.props.loggedIn) ? <ReviewFormContainer /> : <div></div>;

    return (
      <div className="listing-show">

        <section className="listing-show-shop">
          <div className="row">
            <Link className="cover-image" to={`/shops/${shop.id}`} style={{backgroundImage: `url(${shopImage})`}}></Link>
            <Link className="shop-profile-shopname" to={`/shops/${shop.id}`}>{shop.shopname}</Link>
          </div>
          <ListingIndexContainer type="sub" />
        </section>

        <section className="listing-show-info">

          <section className="listing-show-info-sub">

            <div className="listing-show-info-images">
              <div className="cover-image" style={{backgroundImage: `url(${listingImage})`}}></div>
            </div>

            <div className="listing-show-info-main">
              <h3>{listing.title}</h3>
              <h3>{BasicUtil.moneyify(price)}</h3>
              <button className="orange-button"onClick={this.handleAddToCart}>Add to Cart</button>
            </div>

          </section>

          <div className="listing-show-info-sub">
            <section className="listing-show-info-sub-left">
              <div>
                <h3>Details</h3>
                <p>{listing.description}</p>
              </div>
              <div className="listing-show-reviews">
                <ReviewIndexContainer />
                {reviewForm}
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
