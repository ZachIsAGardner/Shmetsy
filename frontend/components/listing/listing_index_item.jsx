import React from 'react';
import { Link } from 'react-router-dom';

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
  } else if (type === "shop"){
    info = (
      <div>
        <h3>{listing.title}</h3>
        <h3>{`$${listing.price}`}</h3>
      </div>
    );
  }

  return (
    <div className={`listing-item-main-${type}`}>

      <Link className="listing-image-link" to={`/listings/${listing.id}`} style={{background: `url(${listing.img_main})`}}/>
      <div className="listing-info">
        {info}
      </div>
    </div>
  );
};

export default ListingIndexItem;
