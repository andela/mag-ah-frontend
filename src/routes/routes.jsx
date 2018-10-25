import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import Home from "../views/Home/index";
import AHHeader from "../views/Header";
import Articles from "../components/articles/Articles";
import MyArticles from "../components/articles/MyArticles";
import NewArticle from "../components/articles/NewArticle";
import UpdateArticle from "../components/articles/UpdateArticle";
import SingleArticle from "../components/articles/ViewSingleArticle";
import ResetPass from "../views/Login/PasswordReset";
import SingleArticle from "../components/articles/Article";

const Routes = () => (
  <Router history={history}>
    <div>
      <Route path="/" component={AHHeader} />
      <Route exact path="/" component={Home} />
      <Route exact path="/login/" component={Home} />
      <Route exact path="/reset-password/" component={Home} />
      <Route exact path="/articles/" component={Articles} />
      <Route exact path="/articles/me" component={MyArticles} />
      <Route exact path="/articles/create/" component={NewArticle} />
      <Route exact path="/articles/update/" component={UpdateArticle} />
      <Route exact path="/articles/:slug" component={SingleArticle} />
      <Route exact path="/articles/:slug/update" component={UpdateArticle} />
    </div>
  </Router>
);
export default Routes;
