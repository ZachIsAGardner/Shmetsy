import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShop, editShop } from '../../actions/shop_actions';
import ShopShow from './shop_show';

const mapStateToProps = (state, ownProps) => {
  let shop;
  let owner;
  
  if (state.entities.shops[ownProps.match.params.shopId]) {
    shop = state.entities.shops[ownProps.match.params.shopId];
    owner = state.entities.users[shop.owner_id];
  }

  return {
    shop,
    owner
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchShop: () => dispatch(fetchShop(ownProps.match.params.shopId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopShow));
