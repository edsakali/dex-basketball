import styled from "styled-components";
import { PlayerParams } from "../../../../../api/players/PlayersDto";
import photo from "../../../../../assets/images/photo1.png";

type Props = Pick<PlayerParams, "name" | "number" | "team">;

export const PlayerCard = ({ name, number, team }: Props) => (
  <CardWrapper>
    <ImgContainer>
      <Img src={photo} alt="photo" />
    </ImgContainer>
    <Description>
      <PlayerName>
        {name}
        <PlayerNumber>#{number}</PlayerNumber>
      </PlayerName>
      <PlayerTeam>{team}</PlayerTeam>
    </Description>
  </CardWrapper>
);

const CardWrapper = styled.div``;

const ImgContainer = styled.div``;

const Img = styled.img``;

const Description = styled.div``;

const PlayerName = styled.h1``;

const PlayerNumber = styled.span``;

const PlayerTeam = styled.p``;
