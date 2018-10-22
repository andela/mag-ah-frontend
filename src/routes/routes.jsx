import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../views/Home/index";
import history from "./history";
import Articles from "../components/articles/Articles";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reset-password/" component={Home} />
      <Route exact path="/login/" component={Home} />
      <Route exact path="/articles/" component={Articles} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
export default Routes;
