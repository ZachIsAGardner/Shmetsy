import React from 'react';

class CreateShop extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.shop;
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createShop(this.state);
    this.props.history.push("/");
  }

  render() {
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

          <input className="orange-button" type="submit" value="Create your Shop!"></input>
        </form>
      </div>
    );
  }
}

export default CreateShop;
