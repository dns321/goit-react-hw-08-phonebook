import React, { Component } from 'react';
import '../styles/StyleViews.scss';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/auth-operation';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login page</h1>
        <h2>Please enter Login and Password</h2>

        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className="login-form"
        >
          <label className="logit-label">
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="logit-label">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperation.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
