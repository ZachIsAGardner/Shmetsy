import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session/session_form_container';
import HeaderContainer from './header/header_container';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <AuthRoute path="/login" component={SessionFormContainer}/>
    </div>
  );
};

export default App;
