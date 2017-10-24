import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {user: {username: "Waluigi", password: "tennisracket"}};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
