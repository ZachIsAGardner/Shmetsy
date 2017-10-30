import React from 'react';
import { Link, Redirect } from 'react-router-dom';

export const Header = (props) => {
  let form;
  let cart;

  if (props.currentUser) {
    form = (
      <button
        className="header-form"
        onClick={(e) => {
          props.endSession();
          props.history.push('/');
        }
      }>Logout</button>
    );
    cart = (
      <Link to={`/cart`} id="header-cart">cart</Link>
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
          {cart}
        </div>

      </div>

    </div>
  );
};
