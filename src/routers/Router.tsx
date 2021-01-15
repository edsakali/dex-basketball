import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { pathList } from "./pathList";
import { LoginPage } from "../modules/auth/login/LoginPage";
import { RegistrationPage } from "../modules/auth/registration/RegistrationPage";
import React from "react";
import { PrivateRoute } from "./PrivateRoute";
import { ContentRoutes } from "./ContentRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path={pathList.auth.login}>
          <LoginPage />
        </Route>
        <Route path={pathList.auth.register}>
          <RegistrationPage />
        </Route>
        <PrivateRoute path={Object.values(pathList.content)}>
          <ContentRoutes />
        </PrivateRoute>
        <Redirect from={"*"} to={pathList.auth.login} />
      </Switch>
    </Router>
  );
};
