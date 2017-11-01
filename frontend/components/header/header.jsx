import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import SearchContainer from './search_container';

export const Header = (props) => {
  let form;
  let cart;
  let demo;

  if (props.currentUser) {
    form = (
      <button
        className="orange-clear-button"
        onClick={(e) => {
          props.endSession();
          props.history.push('/');
        }
      }>Logout</button>
    );
    cart = (
      <Link to={`/cart`} className="orange-clear-button">Cart</Link>
    );
  } else {
    form = (
      <button className="orange-clear-button" onClick={(e) => props.openModal("login")}>Login</button>
    );
    demo = (
      <button
        className="orange-clear-button"
        onClick={(e) => {
          props.createSession({username: "Charlie", password: "waytres124"});
          props.history.push('/');
        }
      }>Demo</button>
    );
  }

  let shop;
  if (props.currentUser && props.shop) {
    shop = (
      <Link className="orange-link" to={`/shops/${props.shop.id}/manage`}>{ props.shop.shopname }</Link>
    );
  } else {
    shop = (
      <p className="orange-link" >Sell on Shmetsy</p>
    );
  }

  return (
    <div className="header">

      <div className="header-contents">

        <div className="header-left">
          <Link to="/">Shmetsy</Link>
          <SearchContainer />
        </div>

        <div className="header-right">
          {shop}
          {form}
          {demo}
          {cart}
        </div>

      </div>

    </div>
  );
};
