import { connect } from 'react-redux';

import { createUser, createSession, endSession } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = createUser;
  return {
    action: () => dispatch(action(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
