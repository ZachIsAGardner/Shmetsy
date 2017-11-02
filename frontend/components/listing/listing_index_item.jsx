import React from 'react';
import { Link } from 'react-router-dom';

import * as BasicUtil from '../../util/basic_util';
import * as DocUtil from '../../util/doc_util';

class ListingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {popupClass: 'closed'};
  }

  render () {

    let info;
    const price = BasicUtil.moneyify(this.props.listing.price);
    const shop = this.props.listing.shop || {};
    const stock = this.props.listing.stock;

    if (this.props.type === "recomended") {
      info = (
        <div>
          <h3>{this.props.listing.title}</h3>
          <Link to={`/shops/${shop.id}`}>{shop.shopname}</Link>
          <h3>{price}</h3>
        </div>
      );
    } else if (this.props.type === "shop" || this.props.type === "show" || this.props.type === "search"){
      info = (
        <div>
          <h3>{this.props.listing.title}</h3>
          <h3>{price}</h3>
        </div>
      );
    } else if (this.props.type === "shop-manager") {
      info = (
        <div>
          <h3>{this.props.listing.title}</h3>
          <p>{`Updated on ${BasicUtil.timeify(this.props.listing.updated_at).fullDate}`}</p>
          <section className="listing-item-section">
            <p>{`${stock} in stock`}</p>
            <h3>{price}</h3>
          </section>
          <div className="buttons">
            <button className="cog-button" onClick={this.togglePopup}>
              <div>Settings</div>
              <div className={"options-modal"}>
                <Link className="gray-button" to={`/shops/${shop.id}/manage/listings/addlisting/${this.props.listing.id}/edit`}>Edit</Link>
                <p className="gray-button" onClick={() => this.props.openModal(`removeListing:${this.props.listing.id}`)}>Remove</p>
              </div>
            </button>
          </div>

        </div>
      );
    } else if (this.props.type === "cart") {
      info = (
        <div>
          <h3>{this.props.listing.title}</h3>
          <p>{`Quantity: ${this.props.listing.quantity}`}</p>
          <h3>{`${BasicUtil.moneyify(this.props.listing.price * this.props.listing.quantity)}`}</h3>
          <div className="shop">
            <div className="cover-image" style={{backgroundImage: `url(${shop.img_profile})`}}></div>
            <Link to={`/shops/${shop.id}`}>{shop.shopname}</Link>
          </div>
          <button id ="remove-button" onClick={() => this.props.deleteCarting(this.props.listing.id)}>remove</button>
        </div>
      );
    }

    return (
      <li className={`listing-item-main-${this.props.type}`}>
        <Link className="cover-image" to={`/listings/${this.props.listing.id}`} onClick={(DocUtil.scrollToTop)} style={{backgroundImage: `url(${this.props.listing.image_url})`}}></Link>
        <div className="listing-info">
          {info}
        </div>
      </li>
    );
  }
}

export default ListingIndexItem;
