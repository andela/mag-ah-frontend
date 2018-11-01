import React from "react";
import { Router, Route } from "react-router-dom";

import history from "./history";
import PrivateRoute from "../helpers/PrivateRoute";
import Home from "../views/Home/index";
import AHHeader from "../views/Header";
import Articles from "../components/articles/Articles";
import MyArticles from "../components/articles/MyArticles";
import NewArticle from "../components/articles/NewArticle";
import UpdateArticle from "../components/articles/UpdateArticle";
import SingleArticle from "../components/articles/ViewSingleArticle";
import ResetPass from "../views/Login/PasswordReset";
import Dashboard from "../components/profile/Dashboard";
import EditProfile from "../components/profile/EditProfile";

const Routes = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={AHHeader} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={Home} />
      <Route exact path="/reset-password/" component={Home} />
      <Route exact path="/articles/" component={Articles} />
      <PrivateRoute exact path="/articles/me" component={MyArticles} />
      <PrivateRoute exact path="/articles/create/" component={NewArticle} />
      <PrivateRoute exact path="/articles/update/" component={UpdateArticle} />
      <Route exact path="/articles/:slug" component={SingleArticle} />
      <PrivateRoute
        exact
        path="/articles/:slug/update"
        component={UpdateArticle}
      />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/reset-password/" component={ResetPass} />
    </div>
  </Router>
);

export default Routes;
