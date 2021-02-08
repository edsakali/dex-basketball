import { useAppDispatch } from "../../../../redux/store";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { pathList } from "../../../../routers/pathList";
import styled from "styled-components";
import { ReactComponent as UpdateImg } from "../../../../assets/images/icons/update.svg";
import { ReactComponent as DeleteImg } from "../../../../assets/images/icons/delete.svg";
import { PlayerProfile } from "./components/PlayerProfile";
import { fetchDeletePlayer, fetchPlayerId } from "../../playersAsyncActions";
import { playersSelector } from "../../playersSlice";
import { getAge } from "../../../../core/helpers/getAge";

interface ParamsId {
  id: string | undefined;
}

export const PlayerViewPage = () => {
  const dispatch = useAppDispatch();
  const { id }: ParamsId = useParams();
  const { player } = useSelector(playersSelector);

  useEffect(() => {
    id && dispatch(fetchPlayerId({ id }));
  }, [dispatch, id]);

  return (
    <>
      <PlayerViewHeader>
        <p>Bread Crumbs</p>
        <ActionLinks>
          <ItemLink to={pathList.content.editPlayers + id}>
            <Update />
          </ItemLink>
          <ItemLink
            to={pathList.content.players}
            onClick={() => {
              id && dispatch(fetchDeletePlayer({ id }));
            }}
          >
            <Delete />
          </ItemLink>
        </ActionLinks>
      </PlayerViewHeader>
      <>
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
      </>
    </>
  );
};

const PlayerViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 16px;
  background: #ffffff;
  color: red;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 20px 32px;
  }
`;

const ActionLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ItemLink = styled(Link)``;

const Update = styled(UpdateImg)`
  width: 24px;
  height: 24px;
`;

const Delete = styled(DeleteImg)`
  width: 24px;
  height: 24px;
`;
