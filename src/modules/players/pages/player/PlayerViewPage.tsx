import { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { pathList } from "../../../../routers/pathList";
import { PlayerProfile } from "./components/PlayerProfile";
import { fetchDeletePlayer, fetchPlayerId } from "../../playersAsyncActions";
import { playersSelector } from "../../playersSlice";
import { getAge } from "../../../../core/helpers/getAge";
import { ViewHeader } from "../../../../components/ViewHeader";
import { LoadState } from "../../../../redux/loadState";
import { Spinner } from "../../../../components/Spiner";

export const PlayerViewPage = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { id } = useParams<{ id: string }>();
  const { player, loading } = useSelector(playersSelector);

  useEffect(() => {
    id && dispatch(fetchPlayerId({ id }));
  }, [dispatch, id]);

  const handleClick = () => id && dispatch(fetchDeletePlayer({ id }));

  return (
    <>
      <ViewHeader
        crumbs={[
          { label: "Main", pathname: "/" },
          { label: "Players", pathname: pathList.content.players },
          { label: player?.name, pathname: pathname },
        ]}
        handleClick={handleClick}
        pathEdit={pathList.content.editPlayers + id}
        pathBack={pathList.content.players}
      />
      {loading === LoadState.pending ? (
        <Spinner />
      ) : (
        <PlayerProfile
          name={player?.name}
          number={player?.number}
          avatarUrl={player?.avatarUrl}
          team={player?.team}
          position={player?.position}
          weight={player?.weight}
          height={player?.height}
          age={player && getAge(player)}
        />
      )}
    </>
  );
};
