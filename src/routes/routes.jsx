import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../views/Home/index";
import history from "./history";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reset-password/" component={Home} />
      <Route exact path="/login/" component={Home} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
export default Routes;
