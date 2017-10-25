import React from 'react';

import ListingIndexItem from './listing_index_item';

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

    const listingEls = this.props.listings.map((listing) => {
      return <ListingIndexItem key={listing.id} listing={listing}/>
    });

    return (
      <div className={this.props.type}>
        <h2>{listingMessage}</h2>
        <ul>
          {listingEls}
        </ul>
      </div>
    );

  }

}

export default ListingIndex;
