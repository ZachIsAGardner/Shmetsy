import React from 'react';

class ShopManagerShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchShop();
  }

  render() {
    return (
      <div>
        <h2>{`Greetings, ${this.props.shop.shopname}`}</h2>
      </div>
    );
  }
}

export default ShopManagerShow;
