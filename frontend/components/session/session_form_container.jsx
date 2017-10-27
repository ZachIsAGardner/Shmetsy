import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { closeModal, openModal } from '../../actions/modal_actions';
import { createUser, createSession } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = (state.session.currentUser) ? true : false;
  const formType = ownProps.modal;
  const errors = Object.values(state.errors.session);

  return {
    loggedIn,
    formType,
    errors
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.modal === "signup") ? createUser : createSession;
  return {
    action: (user) => dispatch(action(user)),
    closeModal: () => dispatch(closeModal()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
