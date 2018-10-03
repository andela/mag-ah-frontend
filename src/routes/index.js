import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/" className="App-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" className="App-link">
            Login
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
