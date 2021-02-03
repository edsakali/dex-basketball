import styled from "styled-components";
import { TeamParams } from "../../../../../api/teams/TeamsDto";

type Props = Pick<TeamParams, "name" | "foundationYear" | "imageUrl">;

export const TeamCard = ({ name, foundationYear, imageUrl }: Props) => (
  <>
    <TeamLogoContainer>
      <TeamLogo src={`http://dev.trainee.dex-it.ru${imageUrl}`} alt="img" />
    </TeamLogoContainer>
    <TeamDescription>
      <TeamName>{name}</TeamName>
      <TeamFoundation>Year of foundation: {foundationYear}</TeamFoundation>
    </TeamDescription>
  </>
);

const TeamLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 56px;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(
    121.57deg,
    ${({ theme }) => theme.colors.grey} 1.62%,
    #393939 81.02%
  );

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 65px 0;
  }
`;
const TeamLogo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
`;
const TeamDescription = styled.div`
  text-align: center;
  padding: 19px 0;
  border-radius: 0 0 4px 4px;
  background: ${({ theme }) => theme.colors.darkGrey};
  color: #ffffff;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 24px 0;
  } ;
`;
const TeamName = styled.p`
  font-size: 12px;
  margin-bottom: 10px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 18px;
  }
`;
const TeamFoundation = styled.p`
  font-size: 10px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 14px;
  }
`;
