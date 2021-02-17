import styled from "styled-components";
import { PlayerParams } from "../../../../../api/players/PlayersDto";

type Props = Pick<PlayerParams, "name" | "number" | "team" | "avatarUrl">;

export const PlayerCard = ({ name, number, team, avatarUrl }: Props) => (
  <>
    <ImgContainer>
      <Img src={`http://dev.trainee.dex-it.ru${avatarUrl}`} alt="photo" />
    </ImgContainer>
    <Description>
      <PlayerName>
        {name}
        <PlayerNumber>&nbsp;#{number}</PlayerNumber>
      </PlayerName>
      <PlayerTeam>{team}</PlayerTeam>
    </Description>
  </>
);

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 11px 24px 0 24px;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(
    121.57deg,
    ${({ theme }) => theme.colors.grey} 1.62%,
    #393939 81.02%
  );
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 73px 0 0 0;
  }
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;

const Description = styled.div`
  text-align: center;
  padding: 19px 5px;
  border-radius: 0 0 4px 4px;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.white};
`;

const PlayerName = styled.h1`
  font-size: 12px;
  margin-bottom: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 18px;
  }
`;

const PlayerNumber = styled.span`
  color: ${({ theme }) => theme.colors.lightRed};
  font-size: 12px;
  margin-bottom: 10px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 18px;
  }
`;

const PlayerTeam = styled.p`
  font-size: 10px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 14px;
  }
`;
