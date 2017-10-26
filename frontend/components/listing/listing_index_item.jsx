import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listing, type }) => {

  let info;
  if (type === "recomended") {
    info = (
      <Link to={`/shops/${listing.shop.id}`}>{listing.shop.shopname}</Link>
    );
  }

  return (
    <div className="listing-item">
      <img src={listing.img_main} alt="listing image"></img>
      <div className="listing-info">
        <h3>{listing.title}</h3>
        {info}
        <h3>{`$${listing.price}`}</h3>
      </div>
    </div>
  );
};

export default ListingIndexItem;
