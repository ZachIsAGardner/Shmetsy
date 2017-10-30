import React from 'react';
import { Link } from 'react-router-dom';

import * as TimeUtil from '../../util/time_util';
import * as BasicUtil from '../../util/basic_util';

const ListingIndexItem = ({ listing, type }) => {

  let info;
  const price = BasicUtil.moneyify(listing.price);

  if (type === "recomended") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <Link to={`/shops/${listing.shop.id}`}>{listing.shop.shopname}</Link>
        <h3>{price}</h3>
      </div>
    );
  } else if (type === "shop" || type === "show"){
    info = (
      <div>
        <h3>{listing.title}</h3>
        <h3>{price}</h3>
      </div>
    );
  } else if (type === "shop-manager") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <p>{`Updated on ${TimeUtil.readTime(listing.updated_at).fullDate}`}</p>
        <section className="listing-item-section">
          <p>{`${listing.stock} in stock`}</p>
          <h3>{price}</h3>
        </section>
        <Link to={`/shops/${listing.shop.id}/manage/addlisting/${listing.id}/edit`}>Edit</Link>
      </div>
    );
  } else if (type === "cart") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <p>{`Quantity: ${listing.quantity}`}</p>
        <h3>{`${BasicUtil.moneyify(listing.price * listing.quantity)}`}</h3>
        <div className="shop">
          <div className="cover-image" style={{backgroundImage: `url(${listing.shop.img_profile})`}}></div>
          <Link to={`/shops/${listing.shop.id}`}>{listing.shop.shopname}</Link>
        </div>
      </div>
    );
  }

  return (
    <li className={`listing-item-main-${type}`}>
      <Link className="cover-image" to={`/listings/${listing.id}`} style={{backgroundImage: `url(${listing.image_url})`}}></Link>
      <div className="listing-info">
        {info}
      </div>
    </li>
  );
};

export default ListingIndexItem;
