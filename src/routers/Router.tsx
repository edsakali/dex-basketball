import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { pathList } from "../core/router/pathList";
import { LoginPage } from "../modules/auth/login/LoginPage";
import { RegistrationPage } from "../modules/auth/registration/RegistrationPage";
import React from "react";
import { PrivateRoute } from "./PrivateRoute";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={pathList.auth.login} exact component={LoginPage} />
        <Route
          path={pathList.auth.register}
          exact
          component={RegistrationPage}
        />
        <PrivateRoute path="/" exact component={() => <>hello</>} />
        <Redirect from={"*"} to={pathList.auth.login} />
      </Switch>
    </Router>
  );
};
