import { connect } from 'react-redux';

import Cart from './cart';

const mapStateToProps = (state) => {

  let cart = [];
  state.session.currentUser.cart.forEach((item, idx) => {
    cart.push(state.entities.listings[item]);
  });

  return {
    cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, null)(Cart);
