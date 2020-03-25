import React, { Fragment } from 'react';
import Login from '../../features/login/Login';
import { Route, Switch, withRouter } from 'react-router-dom';
import Dashboard from '../../features/dashboard/Dashboard';



function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Login} />
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
