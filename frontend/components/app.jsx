import React from 'react';
import { Route } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const App = () => {
  return (
    <div>
      <h1>App!</h1>
      <Route path="/signup" component={SessionFormContainer}/>
      <Route path="/login" component={SessionFormContainer}/>
    </div>
  );
};

export default App;
