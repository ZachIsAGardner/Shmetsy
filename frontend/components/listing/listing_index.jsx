import React from 'react';

import ListingIndexItem from './listing_index_item';
import ListingIndexRemaining from './listing_index_remaining';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestListings();
  }

  render() {
    let listingMessage = "";

    if (this.props.type === 'recomended') {
      listingMessage = "Some items you might be interested in...";
    }
    if (this.props.type === 'shop') {
      listingMessage = "Items";
    }

    const listingEls = this.props.listings.map((listing, idx) => {
      if (idx >= 3 && this.props.type === "sub") {
        if (idx === 3) {
          return <ListingIndexRemaining
            key={idx}
            count={this.props.listings.length}
            type="sub"
            shop={listing.shop}>
          </ListingIndexRemaining>;
        }
        return;
      } else {
        return <ListingIndexItem key={listing.id} listing={listing} type={this.props.type} deleteCarting={this.props.deleteCarting}/>;
      }
    });

    return (
      <div className={`listing-index-${this.props.type}`}>
        <h2>{listingMessage}</h2>
        <ul className={`listing-item-container-${this.props.type}`}>
          {listingEls}
        </ul>
      </div>
    );

  }

}

export default ListingIndex;
