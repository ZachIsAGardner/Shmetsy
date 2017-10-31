const Rating = (rating) => {
  let ratingEls = [];
  for (let i = 1; i < 6; i++) {
    const klass = (i <= this.state.rating) ? "full" : "empty";
    ratingEls.push(
      <span key={i} className={klass} onClick={this.handleRating(i)}>
        <div id="heart-shape"></div>
      </span>
    );
  }
  return ratingEls;
};

export default Rating;
