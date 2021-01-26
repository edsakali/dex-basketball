import styled from "styled-components";
import { FC } from "react";

interface Props {
  name: string;
  foundationYear: number;
  imageUrl: string;
}

export const TeamCard: FC<Props> = ({ name, foundationYear, imageUrl }) => (
  <TeamCardInfo>
    <TeamCardImg>
      <TeamImg src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt="img" />
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
  align-items: center;
  justify-content: center;
  max-height: 104px;
  padding: 20px 0;
  height: 100%;
  background: linear-gradient(
    121.57deg,
    ${({ theme }) => theme.colors.grey} 1.62%,
    #393939 81.02%
  );

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-height: 280px;
  } ;
`;
const TeamImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const TeamDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: #ffffff;
  max-height: 76px;
  height: 100%;
  font-size: 12px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-height: 100px;
    height: 100%;
    font-size: 14px;
  } ;
`;
const TeamName = styled.p`
  margin-bottom: 12px;
`;
const TeamFoundation = styled.p``;
