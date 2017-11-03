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

    var formData = new FormData();
    formData.append("listing[id]", this.state.id);
    formData.append("listing[title]", this.state.title);
    formData.append("listing[description]", this.state.description);
    formData.append("listing[price]", this.state.price);
    formData.append("listing[stock]", this.state.stock);
    formData.append("listing[shop_id]", this.state.shop_id);
    formData.append("listing[owner_id]", this.state.owner_id);
    formData.append("listing[image]", this.state.image_file);

    this.props.formAction(formData, this.state.id);
    this.navigateToManage();
  }

  navigateToManage(){
    this.props.history.push(`/shops/${this.props.shopId}/manage/listings`);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleImage() {
    return (e) => {
      let file = e.currentTarget.files[0];
      let fileReader = new FileReader();
      fileReader.onloadend = function() {
        this.setState({ image_file: file, image_url: fileReader.result});
      }.bind(this);

      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  render() {

    let { title, description, price, stock} = this.state || {};
    let image_url = this.state.image_url || "";
    let message = (this.props.formType === "new") ? 'Add a new listing' : 'Edit listing';

    return (
      <div className="listing-form">
        <Link to={`/shops/${this.props.shopId}/manage/listings`}>Back to Listings</Link>
        <h2>{message}</h2>
        <form onSubmit={this.handleSubmit}>
          <section className="photos">
            <h3>Photos</h3>
            <input type="file"
              name="image-upload"
              onChange={this.handleImage()}>
            </input>

            <div className="cover-image" style={
                {backgroundImage: `url(${image_url})`}
              }></div>
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

          <footer className="submit">
              <div>
              </div>
              <div>
                <button className="submit-orange-button">Submit</button>
              </div>
          </footer>
        </form>
      </div>
    );
  }
}

export default ListingForm;
