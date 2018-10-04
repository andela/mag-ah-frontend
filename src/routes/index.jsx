import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Articles from "../components/articles/articlesList";

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/" className="App-link">
            Articles
          </Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={Articles} />
        <Route path="/articles" component={Articles} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
