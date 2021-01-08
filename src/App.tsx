import React, { FC } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { LoginPage } from "./modules/auth/login/LoginPage";
import { Content } from "./routes/Content";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/styledTheming";
import { RegistrationPage } from "./modules/auth/registration/RegistrationPage";
import { ToastContainer } from "react-toastify";
import { pathList } from "./core/router/pathList";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path={pathList.auth.login} exact component={LoginPage} />
          <Route
            path={pathList.auth.register}
            exact
            component={RegistrationPage}
          />
          <Route path="/" exact component={Content} />
          <Redirect from={"*"} to={pathList.auth.login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
