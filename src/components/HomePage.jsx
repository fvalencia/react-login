import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';

export class HomePage extends Component {
  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2 align="center">Welcome! You have successfully logged in.</h2>
        <p align="center">
          <Link to="/login" onClick={this.props.logout}>
            Logout
          </Link>
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  logout: userActions.logout
};

export default connect(
  null,
  mapDispatchToProps
)(HomePage);
