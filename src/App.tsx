import { FC } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./modules/auth/login/LoginPage";
import { Content } from "./routes/Content";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/styledTheming";
import { RegistrationPage } from "./modules/auth/registration/RegistrationPage";
import { ToastContainer } from "react-toastify";

export const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/registration" exact component={RegistrationPage} />
          <Route path="/content" exact component={Content} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
