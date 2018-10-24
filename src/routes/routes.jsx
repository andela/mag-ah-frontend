import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Home from "../views/Home/index";
import history from "./history";
import Articles from "../components/articles/Articles";
import NewArticle from "../components/articles/NewArticle";
import UpdateArticle from "../components/articles/UpdateArticle";

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/reset-password/" component={Home} />
      <Route exact path="/login/" component={Home} />
      <Route exact path="/articles/" component={Articles} />
      <Route exact path="/articles/create/" component={NewArticle} />
      <Route exact path="/articles/update/" component={UpdateArticle} />
      <Redirect to="/" />
    </Switch>
  </Router>
);
export default Routes;
