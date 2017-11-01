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

          <label>Any Price
            <input type="checkbox" onClick={this.handleAnyPrice}></input>
          </label>

          <form onSubmit={this.handleCustomPrice}>

            <label>Custom Price
              <input type="checkbox"></input>
            </label>

            <label>Low
              <input
                type="number"
                value={this.state.low}
                onChange={this.handleInput('low')}>
              </input>
            </label>

            <label>High
              <input
                type="number"
                value={this.state.high}
                onChange={this.handleInput('high')}>
              </input>
            </label>

            <input type="submit"></input>
          </form>

        </div>

      </div>
    );
  }
}

export default Stipulations;
