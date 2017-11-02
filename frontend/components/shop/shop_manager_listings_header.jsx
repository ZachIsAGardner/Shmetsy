import React from 'react';
import { Link } from 'react-router-dom';

const ListingsHeader = ({props}) => {
  return (
    <header className="shop-manager-listings-header">
      <h2>Listings</h2>
      <Link to={`/shops/${props.shop.id}/manage/listings/addlisting`}>Add Listing</Link>
    </header>
  );
};

export default ListingsHeader;
