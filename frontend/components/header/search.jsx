import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

    const { high, low } = this.props.filter;
    this.state = {title: "", high, low};
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.updateFilter('title', this.state.title);
    this.props.updateFilter('low', undefined);
    this.props.updateFilter('high', undefined);

    this.props.requestListings();

    this.setState({title: ""});
    this.props.history.push(`/search/?q=${this.state.title}`);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render () {
    return (
      <div className="search-bar">
        <form onSubmit={this.handleSubmit}>

          <input
            type="text"
            value={this.state.title}
            onChange={this.handleInput('title')}>
          </input>

          <input type="submit" value="search"></input>
        </form>

      </div>
    );
  }
}

export default SearchBar;
