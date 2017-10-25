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

  return (
    <div className="header">

      <div className="header-left">
        <h1>Shmetsy</h1>
        <div id="search-bar">
          <input type=""></input>
          <label>Search</label>
        </div>
      </div>

      <div className="header-right">
        {form}
        <div id="header-cart">cart</div>
      </div>

    </div>
  );
};
