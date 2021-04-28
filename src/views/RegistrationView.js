import React, { Component } from 'react';
import '../styles/StyleViews.scss';
import { connect } from 'react-redux';
import authOperation from '../redux/auth/auth-operation';

class RegistrationView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1>Registration page</h1>
        <h2>Please enter Login and Password</h2>

        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          className="registration-form"
        >
          <label className="registration-label">
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className="registration-label">
            Email
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="registration-label">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter minimum 7 characters"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Registration</button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   onRegister: data => dispatch(authOperation.register(data)),
// });

const mapDispatchToProps = {
  onRegister: authOperation.register,
};

export default connect(null, mapDispatchToProps)(RegistrationView);
