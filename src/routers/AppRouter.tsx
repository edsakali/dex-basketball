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
import { Spinner } from "../components/Spiner";
import { useSelector } from "react-redux";
import { authSelector } from "../modules/auth/authSlice";
import { LoadState } from "../redux/loadState";

export const AppRouter = () => {
  const { loading } = useSelector(authSelector);
  return (
    <Router>
      <Switch>
        <Route path={pathList.auth.login}>
          <LoginPage />
        </Route>
        <Route path={pathList.auth.register}>
          <RegistrationPage />
        </Route>
        {loading === LoadState.idle ? (
          <PrivateRoute path={Object.values(pathList.content)}>
            <ContentRoutes />
          </PrivateRoute>
        ) : (
          <Spinner />
        )}

        <Redirect from={"*"} to={pathList.content.teams} />
      </Switch>
    </Router>
  );
};
