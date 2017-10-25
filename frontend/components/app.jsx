import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import ShopShowContainer from './shop/shop_show_container';
import HeaderContainer from './header/header_container';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <Route path="/shops" component={ShopShowContainer} />

      <AuthRoute path="/signup" component={SessionFormContainer} />
      <AuthRoute path="/login" component={SessionFormContainer} />
    </div>
  );
};

export default App;
