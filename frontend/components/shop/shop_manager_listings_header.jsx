import React from 'react';
import { Link } from 'react-router-dom';

const ListingsHeader = ({props}) => {
  return (
    <header className="shop-manager-listings-header">
      <h1>Listings</h1>
      <Link to={`/shops/${props.shop.id}/manage/addlisting`}>Add Listing</Link>
    </header>
  );
};

export default ListingsHeader;
