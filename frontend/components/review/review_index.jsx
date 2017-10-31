import React from 'react';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReviews();
  }

  render() {

   return (
      <ul className="reviews">

      </ul>
    );
  }
}

export default ReviewIndex;
