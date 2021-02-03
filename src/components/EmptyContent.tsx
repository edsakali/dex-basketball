import styled from "styled-components";
import { Button } from "./ui/Button";
import emptyTeamImg from "../assets/images/empty-teams-bg.png";
import { pathList } from "../routers/pathList";
import { useHistory } from "react-router-dom";

interface Props {
  label: string;
}

export const EmptyContent = ({ label }: Props) => {
  const { push } = useHistory();

  return (
    <EmptyContentContainer>
      <EmptyContentWrapper>
        <EmptyContentImg src={emptyTeamImg} alt="emptyTeamImg" />
        <EmptyContentTitle>Empty here</EmptyContentTitle>
        <EmptyActionText>Add new {label} to continue</EmptyActionText>
        <ButtonWrapper>
          <Button onClick={() => push(pathList.content.addTeam)}>Add +</Button>
        </ButtonWrapper>
      </EmptyContentWrapper>
    </EmptyContentContainer>
  );
};

const EmptyContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyContentWrapper = styled.div`
  text-align: center;
  padding: 48px 18px;
  width: 100%;
  background: #ffffff;
  border-radius: 15px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-width: 556px;
    width: 100%;
    padding: 48px 37px;
    border-radius: 15px;
  }
`;

const EmptyContentImg = styled.img`
  width: 100%;
  object-fit: cover;
  margin-bottom: 48px;
`;

const EmptyContentTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.lightestRed};
  margin-bottom: 24px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 36px;
  }
`;

const EmptyActionText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 48px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 24px;
  }
`;
const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-width: 366px;
    width: 100%;
  }
`;
