import React from 'react';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createListing(this.props.listing);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div className="listing-form">
        <form onSubmit={this.handleSubmit}>
          <section>
            <h3>Photos</h3>
          </section>

          <section className="details">
            <h3>Details</h3>
            <label>Title
              <input type="text"></input>
            </label>
            <label>Description
              <textarea>

              </textarea>
            </label>
          </section>

          <section className="inv-price">
            <h3>Inventory and Pricing</h3>
            <label>Price
              <input type="text"></input>
            </label>
            <label>Quantity
              <input type="text"></input>
            </label>
          </section>

          <section className="shipping">
            <h3>Shipping</h3>
          </section>

          <section className="submit">
            <button>Cancel</button>
            <button>Preview</button>
            <button>Save as draft</button>
            <input type="submit"></input>
          </section>

        </form>
      </div>
    );
  }
}

export default ListingForm;
