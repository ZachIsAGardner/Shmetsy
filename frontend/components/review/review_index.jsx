import React from 'react';

import * as BasicUtil from '../../util/basic_util';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteReview = this.handleDeleteReview.bind(this);
  }

  handleDeleteReview(id) {
    return () => this.props.deleteReview(id);
  }

  render() {

    const reviewEls = this.props.reviews.map((review) => {

      let reviewerImage = review.user.img_url || '';
      let ratingEls = [];
      for (let i = 1; i < 6; i++) {
        const klass = (i <= review.rating) ? "full" : "empty";
        ratingEls.push(
          <span key={i} className={klass}>
            <div id="heart-shape"></div>
          </span>
        );
      }

      let deleteButton;
      if (review.user_id === this.props.currentUserId) {
        deleteButton = <button id="remove-button" onClick={this.handleDeleteReview(review.id)}>Remove</button>;
      }

      return (
        <li key={review.id} className="review">
          <div className="reviewer">
            <div
              className="cover-image-circle"
              style={{ backgroundImage: `url(${reviewerImage})`}}>
            </div>
            <p>Reviewed by</p>
            <p>{review.user.username}</p>
          </div>

          <div className="review-main">
            <div className="shapes-container">
              {ratingEls}
            </div>
            <p>{review.body}</p>
            {deleteButton}
          </div>

          <div className="review-time">
            <p>{BasicUtil.timeify(review.created_at).fullDate}</p>
          </div>
        </li>
      );
    }, this);

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
