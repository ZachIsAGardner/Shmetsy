import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ModalsReducer = (oldState = null, action) => {
  let newState;

  switch(action.type) {
  case OPEN_MODAL:
    return action.modal;
  case CLOSE_MODAL:
    return null;
  default:
    return oldState;
  }
};

export default ModalsReducer;
