import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../actions';

export class RegisterPage extends Component {
  state = {
    user: {
      username: '',
      password: ''
    },
    submitted: false
  };

  handleChange = event => {
    this.setState({ user: { ...this.state.user, [event.target.name]: event.target.value } });
  };

  handleSubmit = () => {
    this.setState({ submitted: true });
    const { username, password } = this.state.user;
    if (username && password) {
      this.props.register(this.state.user);
    }
  };

  render() {
    const { user, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Register</h2>
        <form name="form">
          <div className={'form-group' + (submitted && !user.username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control username" name="username" onChange={this.handleChange} autoComplete="username" />
            {submitted && !user.username && <div className="help-block">Username is required</div>}
          </div>
          <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control password" name="password" onChange={this.handleChange} autoComplete="new-password" />
            {submitted && !user.password && <div className="help-block">Password is required</div>}
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>
              Register
            </button>
            <Link to="/login" className="btn btn-link">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export { RegisterPage as TestRegisterPage };

const mapDispatchToProps = {
  register: userActions.register
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterPage);
