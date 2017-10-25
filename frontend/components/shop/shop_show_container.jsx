import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShop, editShop } from '../../actions/shop_actions';
import ShopShow from './shop_show';

const mapStateToProps = (state, ownProps) => {
  const shopId = parseInt(ownProps.location.pathname.slice(-1));
  const shop = state.entities.shops[shopId];

  return {
    shopId,
    shop
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchShop: (id) => dispatch(fetchShop(id))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopShow));