import { AppLayout } from "../components/layouts/AppLayout";
import { Route, Switch } from "react-router-dom";
import { TeamsPage } from "../modules/teams/pages/TeamsPage";
import { PlayerPage } from "../modules/players/pages/PlayerPage";
import { pathList } from "./pathList";
import { AddTeamPage } from "../modules/teams/pages/AddTeamPage";

export const ContentRoutes = () => (
  <AppLayout>
    <Switch>
      <Route path={pathList.content.teams} exact>
        <TeamsPage />
      </Route>
      <Route path={pathList.content.addTeam}>
        <AddTeamPage />
      </Route>
      <Route path={pathList.content.players} exact>
        <PlayerPage />
      </Route>
    </Switch>
  </AppLayout>
);
