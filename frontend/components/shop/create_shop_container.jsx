import { connect } from 'react-redux';

import { createShop } from '../../actions/shop_actions';
import CreateShop from './create_shop';

const mapStateToProps = (state) => {
  let shop = {
      shopname: "",
      description: "",
      sales: 0,
      location: "",
      owner_id: state.session.currentUser.id,
      img_banner: 'http://weknowyourdreams.com/images/white/white-11.jpg',
      img_profile: 'https://paos.org/global_graphics/default-store-350x350.jpg'
    };

  return {
    shop
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createShop: (shop) => dispatch(createShop(shop))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateShop);
