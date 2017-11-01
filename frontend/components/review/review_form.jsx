import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  componentWillReceiveProps() {
    this.setState(this.props.review);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
    this.setState({body: "", rating: 5});
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleRating(newRating) {
    return (e) => {
      this.setState({rating: newRating});
    };
  }

  render() {

    let ratingEls = [];
    for (let i = 1; i < 6; i++) {
      const klass = (i <= this.state.rating) ? "full" : "empty";
      ratingEls.push(
        <span key={i} className={klass} onClick={this.handleRating(i)}>
          <div id="heart-shape"></div>
        </span>
      );
    }

    return(
      <div className="review-form">
        <label>Leave a review?</label>
        <form onSubmit={this.handleSubmit}>
          <label className="body">Your thoughts?
            <textarea
              placeholder="Say something nice."
              value={this.state.body}
              onChange={this.handleInput('body')}>
            </textarea>
          </label>

          <label className="rating">How would you rate this item?
            <div className="shapes-container">
              {ratingEls}
            </div>
          </label>

          <input className="orange-button" type="submit"></input>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
