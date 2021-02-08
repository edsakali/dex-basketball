import styled from "styled-components";
import { TeamComposition } from "./components/TeamСomposition";
import { TeamProfile } from "./components/TeamProfile";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchDeleteTeam, fetchTeamId } from "../../teamsAsyncActions";
import { useAppDispatch } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { teamsSelector } from "../../teamsSlice";
import { pathList } from "../../../../routers/pathList";
import { ReactComponent as UpdateImg } from "../../../../assets/images/icons/update.svg";
import { ReactComponent as DeleteImg } from "../../../../assets/images/icons/delete.svg";
import { fetchPlayersTeamIds } from "../../../players/playersAsyncActions";
import { playersSelector } from "../../../players/playersSlice";

interface ParamsId {
  id: string | undefined;
}

export const TeamViewPage = () => {
  const dispatch = useAppDispatch();

  const { id }: ParamsId = useParams();

  const { team } = useSelector(teamsSelector);

  const { players } = useSelector(playersSelector);

  useEffect(() => {
    id && dispatch(fetchTeamId({ id }));
    id && dispatch(fetchPlayersTeamIds([{ value: id }]));
  }, [dispatch, id]);

  return (
    <Container>
      <TeamViewHeader>
        <p>Bread Crumbs</p>
        <ActionLinks>
          <ItemLink to={pathList.content.editTeam + id}>
            <Update />
          </ItemLink>
          <ItemLink
            to={pathList.content.teams}
            onClick={() => {
              id && dispatch(fetchDeleteTeam({ id }));
            }}
          >
            <Delete />
          </ItemLink>
        </ActionLinks>
      </TeamViewHeader>
      <ContentWrapper>
        <TeamProfile
          name={team?.name}
          conference={team?.conference}
          division={team?.division}
          foundationYear={team?.foundationYear}
          imageUrl={team?.imageUrl}
        />
        <TeamComposition players={players} />
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.main``;

const TeamViewHeader = styled.div`
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

const ContentWrapper = styled.div``;
