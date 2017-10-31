import React from 'react';

import * as BasicUtil from '../../util/basic_util';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReviews();
  }

  render() {
    const reviewEls = this.props.reviews.map((review) => {
      let reviewerImage = review.user.img_url || 'https://s3.amazonaws.com/cdn.roosterteeth.com/default/original/user_profile_female.jpg';
      return (
        <li key={review.id} className="review">
          <div className="reviewer">
            <div className="cover-image" style={{ backgroundImage: `url(${reviewerImage})`}}></div>
            <p>{review.user.username}</p>
          </div>
          <div className="review-main">
            <div>{review.rating}</div>
            <p>{review.body}</p>
          </div>
          <p>{BasicUtil.timeify(review.created_at).fullDate}</p>
        </li>
      );
    });

    return (
      <div>
        <h1>{`Reviews (${this.props.reviews.length})`}</h1>
        <ul className="reviews">
          {reviewEls}
        </ul>
      </div>
    );
  }
}

export default ReviewIndex;
