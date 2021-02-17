import { TeamComposition } from "./components/TeamСomposition";
import { TeamProfile } from "./components/TeamProfile";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  fetchDeleteTeam,
  fetchTeamId,
  fetchTeamPlayers,
} from "../../teamsAsyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { teamsSelector } from "../../teamsSlice";
import { pathList } from "../../../../routers/pathList";
import { ParamsId } from "../../../../api/appDto";
import { ViewHeader } from "../../../../components/ViewHeader";
import { LoadState } from "../../../../redux/loadState";
import { Spinner } from "../../../../components/Spiner";

export const TeamViewPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { id }: ParamsId = useParams();
  const { team, teamPlayers, loadingTeam, loadingTeamPlayers } = useSelector(
    teamsSelector
  );

  useEffect(() => {
    id && dispatch(fetchTeamId({ id }));
    id && dispatch(fetchTeamPlayers([{ value: id }]));
  }, [dispatch, id]);

  const handleClick = () => id && dispatch(fetchDeleteTeam({ id }));

  return (
    <>
      <ViewHeader
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Teams", pathname: pathList.content.teams },
          { label: team?.name, pathname: pathname },
        ]}
        handleClick={handleClick}
        pathEdit={pathList.content.editTeam + id}
        pathBack={pathList.content.teams}
      />
      {loadingTeam === LoadState.pending ? (
        <Spinner />
      ) : (
        <TeamProfile
          name={team?.name}
          conference={team?.conference}
          division={team?.division}
          foundationYear={team?.foundationYear}
          imageUrl={team?.imageUrl}
        />
      )}

      {loadingTeamPlayers === LoadState.pending ? (
        <Spinner />
      ) : (
        <TeamComposition players={teamPlayers} />
      )}
    </>
  );
};
