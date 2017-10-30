import React from 'react';
import { Link } from 'react-router-dom';

import * as TimeUtil from '../../util/time_util';

const ListingIndexItem = ({ listing, type }) => {

  let info;

  if (type === "recomended") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <Link to={`/shops/${listing.shop.id}`}>{listing.shop.shopname}</Link>
        <h3>{`$${listing.price}`}</h3>
      </div>
    );
  } else if (type === "shop" || type === "show"){
    info = (
      <div>
        <h3>{listing.title}</h3>
        <h3>{`$${listing.price}`}</h3>
      </div>
    );
  } else if (type === "shop-manager") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <p>{`Updated on ${TimeUtil.readTime(listing.updated_at).fullDate}`}</p>
        <section className="listing-item-section">
          <p>{`${listing.stock} in stock`}</p>
          <h3>{`$${listing.price}`}</h3>
        </section>
        <Link to={`/shops/${listing.shop.id}/manage/addlisting/${listing.id}/edit`}>Edit</Link>
      </div>
    );
  } else if (type === "cart") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <p>{`Quantity: ${listing.quantity}`}</p>
        <h3>{`$${listing.price * listing.quantity}`}</h3>
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
