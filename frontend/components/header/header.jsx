import React from 'react';
import { Link } from 'react-router-dom';

export const Header = (props) => {
  let form;

  if (props.currentUser) {
    form = (
      <button className="header-form" onClick={(e) => props.endSession()}>Logout</button>
    );
  } else {
    form = (
      <button className="header-form" onClick={(e) => props.openModal("login")}>Login</button>
    );
  }

  let shop;
  if (props.currentUser && props.shop) {
    shop = (
      <Link to={`/shops/${props.shop.id}/manage`}>{ props.shop.shopname }</Link>
    );
  } else {
    shop = (
      <p>Sell on Shmetsy</p>
    );
  }

  return (
    <div className="header">

      <div className="header-contents">

        <div className="header-left">
          <Link to="/">Shmetsy</Link>
          <div id="search-bar">
            <input type=""></input>
            <label>Search</label>
          </div>
        </div>

        <div className="header-right">
          {shop}
          {form}
          <Link to={`/cart`} id="header-cart">cart</Link>
        </div>

      </div>

    </div>
  );
};
