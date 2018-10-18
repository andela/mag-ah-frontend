import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ResetPass from "../views/Login/PasswordReset";

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/reset-password/" component={ResetPass} />;
      </Switch>
    </div>
  </Router>
);

export default Routes;
