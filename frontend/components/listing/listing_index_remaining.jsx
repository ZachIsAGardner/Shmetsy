import React from 'react';
import { Link } from 'react-router-dom';

const ListingIndexRemaining = ({count, type, shop}) => {
  return (
    <Link className={`listing-item-main-${type}`} to={`/shops/${shop.id}`}>
      <h3>{count}</h3>
      <h3>items</h3>
    </Link>
  );
};

export default ListingIndexRemaining;
