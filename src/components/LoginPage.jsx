import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

export class LoginPage extends Component {
  state = {
    username: '',
    password: '',
    submitted: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  };

  render() {
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form">
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control username" name="username" onChange={this.handleChange} autoComplete="username" />
            {submitted && !username && <div className="help-block">Username is required</div>}
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control password" name="password" onChange={this.handleChange} autoComplete="new-password" />
            {submitted && !password && <div className="help-block">Password is required</div>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>
              Login
            </button>
            <button type="button" className="btn btn-link">
              <Link to="/register">Register</Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  login: userActions.login
};

export { LoginPage as TestLoginPage };
export default connect(
  null,
  mapDispatchToProps
)(LoginPage);
