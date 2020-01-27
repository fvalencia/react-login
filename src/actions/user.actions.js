import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';

export const login = (username, password) => {
  const request = user => {
    return { type: userConstants.LOGIN_REQUEST, user };
  };
  const success = user => {
    return { type: userConstants.LOGIN_SUCCESS, user };
  };
  const failure = error => {
    return { type: userConstants.LOGIN_FAILURE, error };
  };

  return dispatch => {
    dispatch(request());
    return userService
      .login(username, password)
      .then(user => dispatch(success(user)))
      .then(() => history.push('/'))
      .catch(err => {
        dispatch(failure(err));
        dispatch(alertActions.error('Error: Username or password is incorrect'));
      });
  };
};

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  const request = user => {
    return { type: userConstants.REGISTER_REQUEST, user };
  };
  const success = user => {
    return { type: userConstants.REGISTER_SUCCESS, user };
  };
  const failure = error => {
    return { type: userConstants.REGISTER_FAILURE, error };
  };

  return dispatch => {
    dispatch(request());
    return userService
      .register(user)
      .then(user => dispatch(success(user)))
      .then(() => history.push('/login'))
      .then(() => dispatch(alertActions.success('Registration successful')))
      .catch(err => {
        dispatch(failure(err));
        dispatch(alertActions.error(err));
      });
  };
}

export const userActions = {
  login,
  logout,
  register
};
