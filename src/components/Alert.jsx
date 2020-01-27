import React, { Component } from 'react';
import { connect } from 'react-redux';
import { alertActions } from '../actions';

export class Alert extends Component {
  render() {
    const { type, message } = this.props.alert;

    if (type && message) {
      setTimeout(() => this.props.clear(), 3000);
    }

    return (
      <div>
        {type && message ? (
          <div className={'alert ' + type} role="alert">
            {message}
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert
});

const mapDispatchToProps = {
  clear: alertActions.clear
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alert);
