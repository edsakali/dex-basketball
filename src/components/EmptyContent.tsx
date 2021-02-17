import styled from "styled-components";
interface Props {
  label: string;
  emptyImg: string;
}

export const EmptyContent = ({ label, emptyImg }: Props) => {
  return (
    <EmptyContentContainer>
      <EmptyContentWrapper>
        <EmptyContentImg src={emptyImg} alt="emptyImg" />
        <EmptyContentTitle>Empty here</EmptyContentTitle>
        <EmptyActionText>Add new {label} to continue</EmptyActionText>
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
  margin: 16px 0;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    margin: 75px 0;
  }
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
  }
`;

const EmptyContentImg = styled.img`
  max-width: 100%;
  object-fit: cover;
  margin-bottom: 48px;
`;

const EmptyContentTitle = styled.h2`
  font-family: "Avenir Black", sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.lightestRed};
  margin-bottom: 16px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 36px;
  }
`;

const EmptyActionText = styled.p`
  font-family: "Avenir Book", sans-serif;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey};
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    font-size: 24px;
  }
`;
