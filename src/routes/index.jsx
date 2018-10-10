import React from "react";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../views";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
=======
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../views/Home";
import Login from "../components/Login/login";
import ResetPasswordComp from "../components/Login/reset-password";
import ForgotPasswordComp from "../components/Login/forgot-password";

const Routes = () => (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <div className="header" />
          <div>
            <a className="navbar-brand font-weight-bold" href="/">
              Authors Haven
            </a>
          </div>
          <div className="collapse navbar-collapse pull-right mr-2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="App-link nav-link sr-only">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login" className="App-link">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPasswordComp} />;
          <Route path="/reset-password" component={ResetPasswordComp} />;
        </Switch>
      </div>
    </div>
>>>>>>> [feat]: enable a user to reset his/her password
  </Router>
);

export default Routes;
