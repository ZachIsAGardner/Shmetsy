import React from 'react';
import { Link } from 'react-router-dom';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.listing;
  }

  componentDidMount() {
    if (this.props.listingId) {
      this.props.requestListing(this.props.listingId);
    }
  }

  componentWillReceiveProps() {
    this.setState(this.props.listing);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
    this.navigateToManage();
  }

  navigateToManage(){
    this.props.history.push(`/shops/${this.props.shopId}/manage/`);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {

    let { title, description, price, stock} = this.state || {};
    return (
      <div className="listing-form">
        <Link to={`/shops/${this.props.shopId}/manage/`}>Back to Listings</Link>
        <h2>Add a new listing</h2>
        <form onSubmit={this.handleSubmit}>
          <section>
            <h3>Photos</h3>
          </section>

          <section className="details">
            <h3>Details</h3>
            <label className="title">Title
              <input
                type="text"
                value={title}
                onChange={this.handleInput('title')}>
              </input>
            </label>
            <label className="description">Description
              <textarea
                value={description}
                onChange={this.handleInput('description')}>
              </textarea>
            </label>
          </section>

          <section className="inv-price">
            <h3>Inventory and Pricing</h3>
            <label className="price">Price
              <input
                type="text"
                value={price}
                onChange={this.handleInput('price')}>
              </input>
            </label>
            <label className="stock">Stock
              <input
                type="text"
                value={stock}
                onChange={this.handleInput('stock')}>
              </input>
            </label>
          </section>

          <section className="shipping">
            <h3>Shipping</h3>
          </section>

          <footer className="submit">
              <div>
                <button className="white-button">Cancel</button>
              </div>
              <div>
                <button className="white-button">Preview</button>
                <button className="white-button">Save as draft</button>
                <button className="orange-button">Submit</button>
              </div>

          </footer>

        </form>
      </div>
    );
  }
}

export default ListingForm;
