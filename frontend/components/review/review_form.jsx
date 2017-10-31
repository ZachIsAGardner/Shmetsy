import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.review;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return(
      <div className="review-form">
        <label>Leave a review?</label>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleInput('body')}>
          </input>
          
          <input
            type="number"
            value={this.state.rating}
            onChange={this.handleInput('rating')}>
          </input>

          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default ReviewForm;
