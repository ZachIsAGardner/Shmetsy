import React from 'react';
import { Link } from 'react-router-dom';

import * as BasicUtil from '../../util/basic_util';
import * as DocUtil from '../../util/doc_util';

const ListingIndexItem = ({ listing, type, deleteCarting, openModal }) => {

  let info;
  const price = BasicUtil.moneyify(listing.price);
  const shop = listing.shop || {};
  const stock = listing.stock;

  if (type === "recomended") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <Link to={`/shops/${shop.id}`}>{shop.shopname}</Link>
        <h3>{price}</h3>
      </div>
    );
  } else if (type === "shop" || type === "show" || type === "search"){
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
        <p>{`Updated on ${BasicUtil.timeify(listing.updated_at).fullDate}`}</p>
        <section className="listing-item-section">
          <p>{`${stock} in stock`}</p>
          <h3>{price}</h3>
        </section>
        <Link to={`/shops/${shop.id}/manage/addlisting/${listing.id}/edit`}>Edit</Link>
        <button onClick={() => openModal(`removeListing:${listing.id}`)}>remove</button>
      </div>
    );
  } else if (type === "cart") {
    info = (
      <div>
        <h3>{listing.title}</h3>
        <p>{`Quantity: ${listing.quantity}`}</p>
        <h3>{`${BasicUtil.moneyify(listing.price * listing.quantity)}`}</h3>
        <div className="shop">
          <div className="cover-image" style={{backgroundImage: `url(${shop.img_profile})`}}></div>
          <Link to={`/shops/${shop.id}`}>{shop.shopname}</Link>
        </div>
        <button id ="remove-button" onClick={() => deleteCarting(listing.id)}>remove</button>
      </div>
    );
  }

  return (
    <li className={`listing-item-main-${type}`}>
      <Link className="cover-image" to={`/listings/${listing.id}`} onClick={(DocUtil.scrollToTop)} style={{backgroundImage: `url(${listing.image_url})`}}></Link>
      <div className="listing-info">
        {info}
      </div>
    </li>
  );
};

export default ListingIndexItem;
