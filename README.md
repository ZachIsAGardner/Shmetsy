# Shmesty

[Shmesty](https://shmetsy.herokuapp.com/) is an app where users can post and purchase items.

### Technologies used

Paperclip and AWS are included in the app in order to upload images and display them throughout the app.

Key Features
------

### Cart

Users can add and remove listings to and from their cart and proceed to checkout once they're finished shopping.

![cart](https://github.com/ZachIsAGardner/Shmetsy/blob/master/docs/readme/Screen%20Shot%202017-11-03%20at%209.53.55%20AM.png)

All prices are displayed appropriately in USD

```javascript
export const moneyify = (number) => {
  let str = '';
  str += number.toString();
  let dollars = str.split(".")[0];
  let cents = str.split(".")[1] || '';
  cents = (cents + "00").slice(0, 2);

  return `$${dollars}.${cents}`;
};
```


Cart actions are included within the listings controller using custom routes. Eliminating the requirement of making a whole new controller for carts.

Items are removed based on name regardless of quantity.

```javascript
def purchase
  @listing = Listing.find(params[:listing_id])
  @carting = current_user.cartings.new(listing: @listing)

  if @carting.save
    render :show
  else
    render json: ['Could not add item to cart'], status: 422
  end
end

def remove
  @listing = Listing.find(params[:listing_id])
  @cartings = current_user.cartings.where(listing_id: params[:listing_id])

  if @cartings.destroy_all
    render :show
  else
    render json: ['Could not remove item from cart'], status: 422
  end
end
```

### Reviews

Users can leave reviews on listings which are comprised of a body and a rating.

![review-form](https://github.com/ZachIsAGardner/Shmetsy/blob/master/docs/readme/Screen%20Shot%202017-11-03%20at%209.09.33%20AM.png)

```javascript
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
```

Reviews are displayed with their rating styled and their review date displayed in month-day-year format.

```javascript
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
```

```javascript
export const timeify = (date) => {

  const splitDate = date.split("T")[0].split("-");
  const day = splitDate[2];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = months[splitDate[1] - 1];
  const year = splitDate[0];
  const fullDate = `${month} ${day}, ${year}`;

  return {
    day,
    month,
    year,
    fullDate
  };
};
```

### Search

Users can search for items based on the title of the item.

![search](https://github.com/ZachIsAGardner/Shmetsy/blob/master/docs/readme/Screen%20Shot%202017-11-03%20at%2011.58.00%20AM.png)

Users can also further filter their search by price range.

```javascript
render() {
  return (
    <div className="stipulations">
      <h4>All categories</h4>

      <div className="price-stip">

        <label>Price ($)</label>
        <button onClick={this.handleAnyPrice}>Any Price</button>

        <label>Custom Price</label>
        <form onSubmit={this.handleCustomPrice}>

          <input
            placeholder="Low"
            type="number"
            value={this.state.low}
            onChange={this.handleInput('low')}>
          </input>

          <p>to</p>

          <input
            placeholder="High"
            type="number"
            value={this.state.high}
            onChange={this.handleInput('high')}>
          </input>

          <input type="submit" value=">"></input>
        </form>

      </div>

    </div>
  );
}
```

### Planned Features
* Categories
* Favorites
