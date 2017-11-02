import React from 'react';

class Stipulations extends React.Component {
  constructor(props) {
    super(props);
    this.handleAnyPrice = this.handleAnyPrice.bind(this);
    this.handleCustomPrice = this.handleCustomPrice.bind(this);
    this.state = this.props.filter;
  }

  handleAnyPrice(e) {
    e.preventDefault();

    this.props.updateFilter('low', undefined);
    this.props.updateFilter('high', undefined);

    this.props.requestListings();
  }

  handleCustomPrice(e) {
    e.preventDefault();

    this.props.updateFilter('low', parseInt(this.state.low));
    this.props.updateFilter('high', parseInt(this.state.high));

    this.props.requestListings();
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  componentDidMount() {
    this.setState({low: undefined, high: undefined});
    this.props.updateFilter('title', this.state.title);
    this.props.requestListings();
  }

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
}

export default Stipulations;
