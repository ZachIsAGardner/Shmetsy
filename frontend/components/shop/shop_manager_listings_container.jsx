import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShop } from '../../actions/shop_actions';
import ShopManagerListings from './shop_manager_listings';

const mapStateToProps = (state) => {

  let shop = {};
  let owner = {};

  if (state.entities.shops[state.session.currentUser.shop]) {
    shop = state.entities.shops[state.session.currentUser.shop];
    owner = state.entities.users[shop.owner_id];
  }

  return {
    shop,
    owner
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    fetchShop: () => dispatch(fetchShop(ownProps.props.match.params.shopId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopManagerListings);
