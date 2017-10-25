import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexItem = ({ listing }) => {
  return (
    <div className="listing-item">
      <img src={listing.img_main} alt="listing image"></img>
      <h3>{listing.title}</h3>
      <Link to={`/shops/${listing.shop.id}`}>{listing.shop.shopname}</Link>
      <h3>{`$${listing.price}`}</h3>
    </div>
  );
};

export default ListingIndexItem;
