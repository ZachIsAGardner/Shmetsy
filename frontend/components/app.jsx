import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div>
      <h1>App!</h1>
      <AuthRoute path="/signup" component={SessionFormContainer}/>
      <AuthRoute path="/login" component={SessionFormContainer}/>
    </div>
  );
};

export default App;
