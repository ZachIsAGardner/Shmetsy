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
      <div>
        <h2>Are you sure?</h2>
        <button onClick={this.handleSubmit}></button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (listingId) => dispatch(deleteListing(listingId))
  };
};

export default connect(null, mapDispatchToProps)(RemoveListing);
