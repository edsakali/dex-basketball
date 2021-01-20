import styled from "styled-components";
import teamImg from "../../../assets/images/teamsimg.png";
import { FC } from "react";

interface Props {
  name: string;
  foundationYear: number;
}

export const TeamCard: FC<Props> = ({ name, foundationYear }) => (
  <TeamCardInfo>
    <TeamCardImg>
      <TeamImg src={teamImg} alt="img" />
    </TeamCardImg>
    <TeamDescription>
      <TeamName>{name}</TeamName>
      <TeamFoundation>Year of foundation: {foundationYear}</TeamFoundation>
    </TeamDescription>
  </TeamCardInfo>
);

const TeamCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TeamCardImg = styled.div`
  display: flex;
  justify-content: center;
  max-height: 280px;
  height: 100%;
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
  } ;
`;
const TeamImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: none;
`;
const TeamDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #303030;
  color: #ffffff;
  max-height: 100px;
  height: 100%;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-height: 100px;
    height: 100%;
  } ;
`;
const TeamName = styled.p`
  margin-bottom: 12px;
`;
const TeamFoundation = styled.p``;
