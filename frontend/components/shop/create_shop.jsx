import React from 'react';

class CreateShop extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.state = this.props.shop;
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.shop);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleImage(field) {
    return (e) => {
      let file = e.currentTarget.files[0];
      let fileReader = new FileReader();
      fileReader.onloadend = function() {
        this.setState({ [`${field}_file`]: file, [`${field}_url`]: fileReader.result});
      }.bind(this);

      if (file) {
        fileReader.readAsDataURL(file);
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.shopAction(this.state, this.state.id);
    this.props.history.push("/");
  }

  render() {
    const submitValue = (this.props.formType === "edit") ? "Save Changes" : "Create your shop!";
    const banner = this.state.banner_url || '';

    return (
      <div className="shop-create">
        <form onSubmit={this.handleSubmit}>

          <div className="name">
            <h2>Name your shop</h2>
            <input
              placeholder="Enter your shop name"
              type="text"
              value={this.state.shopname}
              onChange={this.handleInput('shopname')}
              >
            </input>
          </div>

          <div className="description">
            <h2>Say something about your shop</h2>
            <textarea
              placeholder="Enter your shop description"
              value={this.state.description}
              onChange={this.handleInput('description')}
              >
            </textarea>
          </div>

          <input className="orange-button" type="submit" value={submitValue}></input>
        </form>
      </div>
    );
  }
}

export default CreateShop;
