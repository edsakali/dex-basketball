import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginPage } from "./modules/auth/login/LoginPage";
import { Content } from "./routes/Content";
import { GlobalStyle } from "./assets/styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/styledTheming";
export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/Auth" exact component={LoginPage} />
          <Route path="/" exact component={Content} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};
