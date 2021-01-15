import { ContentLayout } from "../components/layouts/ContentLayout";
import { Route, Switch } from "react-router-dom";
import { Teams } from "../modules/content/teams/Teams";
import { Players } from "../modules/content/players/Players";
import { pathList } from "./pathList";

export const ContentRoutes = () => (
  <ContentLayout>
    <Switch>
      <Route path={pathList.content.teams}>
        <Teams />
      </Route>
      <Route path={pathList.content.players}>
        <Players />
      </Route>
    </Switch>
  </ContentLayout>
);
