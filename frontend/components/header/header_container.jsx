import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { endSession } from '../../actions/session_actions';
import { Header } from './header';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    endSession: () => dispatch(endSession())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
