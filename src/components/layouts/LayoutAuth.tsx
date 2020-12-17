import { FC, ReactNode } from "react";
import styled from "styled-components";
import { Container } from "../../assets/styles/globalStyles";

type Props = {
  titleText: string;
  img: ReactNode;
};

export const LayoutAuth: FC<Props> = ({ titleText, img, children }) => {
  return (
    <Container>
      <LayoutWrapper>
        <AuthContentLeft>
          <WrapperTitle>
            <Title>{titleText}</Title>
          </WrapperTitle>
          {children}
        </AuthContentLeft>
        <AuthContentRight>{img}</AuthContentRight>
      </LayoutWrapper>
    </Container>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1.5fr 2fr;
  }
`;

const AuthContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: #ffffff;
`;

const AuthContentRight = styled.div`
  background: #f5fbff;
  display: none;
  height: 100vh;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const WrapperTitle = styled.div`
  max-width: 366px;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.blue};
`;
