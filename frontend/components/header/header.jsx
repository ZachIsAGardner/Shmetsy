import React from 'react';
import { Link } from 'react-router-dom';

export const Header = ({ currentUser, endSession }) => {

  let form;
  if (currentUser) {
    form = (
      <button className="header-form" onClick={() => endSession()}>Logout</button>
    );
  } else {
    form = (
      <Link className="header-form" to={"/login"}>Login</Link>
    );
  }

  let shop;
  if (currentUser && currentUser.shop) {
    shop = (
      <p>{ currentUser.shop.shopname }</p>
    );
  } else {
    shop = (
      <p>Sell on Shmetsy</p>
    );
  }

  return (
    <div className="header">

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
        <div id="header-cart">cart</div>
      </div>

    </div>
  );
};
