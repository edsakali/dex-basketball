import { AppLayout } from "../components/layouts/AppLayout";
import { Route, Switch } from "react-router-dom";
import { TeamPage } from "../modules/teams/pages/TeamPage";
import { PlayerPage } from "../modules/players/pages/PlayerPage";
import { pathList } from "./pathList";

export const ContentRoutes = () => (
  <AppLayout>
    <Switch>
      <Route path={pathList.content.teams}>
        <TeamPage />
      </Route>
      <Route path={pathList.content.players}>
        <PlayerPage />
      </Route>
    </Switch>
  </AppLayout>
);
