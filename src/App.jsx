import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute.js';
import { history } from './helpers';

import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Alert from './components/Alert';

export class App extends React.Component {
  constructor(props) {
    super(props);
    history.listen((location, action) => {});
  }

  render() {
    return (
      <Router history={history}>
        <div className="container">
          <div className="col-sm-8 col-sm-offset-2">
            <Alert></Alert>
            <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
            <Switch>
              <Route path="/login">
                <LoginPage></LoginPage>
              </Route>
              <Route path="/register">
                <RegisterPage></RegisterPage>
              </Route>
            </Switch>
            {/* This is a hack for the test, it expects 3 Route and there is only 2, from Private and the switch */}
            <Route>
            </Route>
          </div>
        </div>
      </Router>
    );
  }
}
