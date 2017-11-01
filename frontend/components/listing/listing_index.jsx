import React from 'react';

import ListingIndexItem from './listing_index_item';
import ListingIndexRemaining from './listing_index_remaining';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.type !== "search") {
      this.props.requestListings();
    }
  }

  render() {
    let listingMessage = "";

    if (this.props.type === 'recomended') {
      listingMessage = "Some items you might be interested in...";
    }
    if (this.props.type === 'shop') {
      listingMessage = "Items";
    }

    let listingEls = this.props.listings.map((listing, idx) => {
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
        return <ListingIndexItem
          key={listing.id}
          listing={listing}
          type={this.props.type}
          requestReviews={this.props.requestReviews}
          deleteCarting={this.props.deleteCarting}/>;
      }
    }, this);

    if (listingEls.length <= 0 && this.props.type === "search") {
      listingEls = (
        <div className="invalid-search">
          <h3>Sorry, we couldn't find any results for</h3>
          <h3>{this.props.searchQuery}</h3>
        </div>
      );
    }

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
