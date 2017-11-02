import React from 'react';
import { connect } from 'react-redux';

import { deleteListing } from '../../actions/listing_actions';

class RemoveListing extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.deleteListing(parseInt(this.props.modal.split(':')[1]));
    this.props.closeModal();
  }

  render() {
    return (
      <div className="remove-modal">
        <p>{`Are you sure about deleting '${this.props.listing.title}'?`}</p>
        <p>Keep in mind this will permanantly delete your item from the Shmetsy marketplace.</p>
        <div className="buttons">
          <button className="clear-button" onClick={this.props.closeModal}>Cancel</button>
          <button className="orange-button" onClick={this.handleSubmit}>Remove</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  let listingId = parseInt(ownProps.modal.split(':')[1]);
  let listing = state.entities.listings[listingId];

  return {
    listingId,
    listing
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (listingId) => dispatch(deleteListing(listingId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RemoveListing);
