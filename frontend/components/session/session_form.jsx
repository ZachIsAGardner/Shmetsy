import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username: "", password: ""};
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
    const altForm = (this.props.formType === "signup") ? "login" : "signup";

    return (
      <div className="signin-form">

        <h2>{this.props.formType}</h2>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleInput('username')}>
            </input>
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.handleInput('password')}>
            </input>
          </div>

          <input type="submit"></input>
        </form>

        <Link id="form-link" to={`/${altForm}`}>link to {altForm}</Link>
      </div>
    );
  }
}

export default SessionForm;
