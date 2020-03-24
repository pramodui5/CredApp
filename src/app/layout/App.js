import React, { Fragment } from 'react';
import Login from '../../features/login/Login';
import { Route, Switch, Link, withRouter } from 'react-router-dom';
import Dashboard from '../../features/dashboard/Dashboard';
import { Button, Input } from '@material-ui/core';



function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Login} />
      <ul>
        <li>
          <Link to="/">Home</Link>
          <a href="#" as={Link} to="/home">Home as Link</a>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/dashboard" component={Dashboard} />

      </Switch>
    </Fragment>
  );
}

export default withRouter(App);
