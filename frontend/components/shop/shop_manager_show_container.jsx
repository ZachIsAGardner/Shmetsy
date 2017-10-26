import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchShop } from '../../actions/shop_actions';
import ShopManagerShow from './shop_manager_show';

const mapStateToProps = (state) => {
  return {
    shop: state.session.currentUser.shop
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchShop: () => dispatch(fetchShop(ownProps.match.params.shopId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopManagerShow);
