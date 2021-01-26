import styled from "styled-components";
import { Button } from "./ui/Button";
import emptyTeamImg from "../assets/images/empty-teams-bg.png";

interface Props {
  label: string;
}

export const EmptyContent = ({ label }: Props) => (
  <EmptyContentContainer>
    <EmptyContentWrapper>
      <EmptyContentImg src={emptyTeamImg} alt="emptyTeamImg" />
      <EmptyContentTitle>Empty here</EmptyContentTitle>
      <EmptyActionText>Add new {label} to continue</EmptyActionText>
      <ButtonWrapper>
        <Button>Add +</Button>
      </ButtonWrapper>
    </EmptyContentWrapper>
  </EmptyContentContainer>
);

const EmptyContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmptyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 18px;
  width: 100%;
  background: #ffffff;

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
  line-height: 33px;
  color: ${({ theme }) => theme.colors.lightestRed};
  margin-bottom: 24px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 36px;
    line-height: 39px;
  }
`;

const EmptyActionText = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 48px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 24px;
    line-height: 33px;
  }
`;
const ButtonWrapper = styled.div`
  width: 100%;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    max-width: 366px;
    width: 100%;
  }
`;
