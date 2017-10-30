import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';
import { endSession, createSession } from '../../actions/session_actions';
import { Header } from './header';

const mapStateToProps = (state) => {

  let shop;
  let currentUser;
  if (state.session.currentUser) {
    currentUser = state.entities.users[state.session.currentUser.id];
    shop = state.entities.shops[state.session.currentUser.shop];
  }

  return {
    currentUser,
    shop
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    endSession: () => dispatch(endSession()),
    createSession: (user) => dispatch(createSession(user)),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
