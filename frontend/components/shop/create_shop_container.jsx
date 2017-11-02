import { connect } from 'react-redux';

import { createShop, editShop } from '../../actions/shop_actions';
import CreateShop from './create_shop';

const mapStateToProps = (state, ownProps) => {
  let formType = "new";
  let shop = {
      shopname: "",
      description: "",
      sales: 0,
      location: "",
      owner_id: state.session.currentUser.id,
      img_banner: 'http://weknowyourdreams.com/images/white/white-11.jpg',
      img_profile: 'https://paos.org/global_graphics/default-store-350x350.jpg',
      image_file: null,
      image_url: null,
      banner_file: null,
      banner_url: null
    };

    if (ownProps.match.params.shopId) {
      formType = "edit";
      shop = state.entities.shops[ownProps.match.params.shopId];
    }

  return {
    shop,
    formType
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = (ownProps.match.params.shopId) ? editShop : createShop;
  return {
    shopAction: (shop, id) => dispatch(action(shop, id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateShop);
