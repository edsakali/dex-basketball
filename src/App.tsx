import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Auth } from "./routes/Auth";
import { Content } from "./routes/Content";
import { GlobalStyle } from "./assets/styles/globalStyles";

export const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/Auth" exact component={Auth} />
        <Route path="/" exact component={Content} />
      </Switch>
    </Router>
  );
};
