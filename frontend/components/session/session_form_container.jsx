import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { createUser, createSession, endSession } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const formType = (ownProps.location.pathname === "/signup") ? "signup" : "login";

  return {
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.location.pathname === "/signup") ? createUser : createSession;
  return {
    action: (user) => dispatch(action(user))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
