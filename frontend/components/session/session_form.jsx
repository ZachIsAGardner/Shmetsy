import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {username: "Charlie", password: "waytres124"};
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
    const currentForm = (this.props.formType === "signup") ? "Sign Up" : "Login";

    const errorEls = this.props.errors.map((error, idx) => {
      if (this.props.errors[0].length < 1) {
        return;
      }
      return (
        <li key={idx}>{error}</li>
      );
    });

    const heading = (altForm === "login") ? (
      <div className="heading">
        <Link className="unselected" to={`/${altForm}`}>Login</Link>
        <h2 className="selected">Sign Up</h2>
      </div>
    ) : (
      <div className="heading">
        <h2 className="selected">Login</h2>
        <Link className="unselected" to={`/${altForm}`}>Sign Up</Link>
      </div>
    );

    return (
      <div className="signin-form-container">
        <div className="signin-form">

          {heading}

          <div className="buttons">
            <button>Sign In with Facebook</button>
            <button>Sign In with Google</button>
          </div>

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

            <input type="submit" value={currentForm}></input>
          </form>

          <ul>
            {errorEls}
          </ul>

        </div>
      </div>
    );
  }
}

export default SessionForm;
