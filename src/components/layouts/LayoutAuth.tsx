import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  titleText: string;
  img: ReactNode;
};

export const LayoutAuth: FC<Props> = ({ titleText, img, children }) => {
  return (
    <LayoutWrapper>
      <AuthContentLeft>
        <WrapperTitle>
          <Title>{titleText}</Title>
        </WrapperTitle>
        {children}
      </AuthContentLeft>
      <AuthContentRight>{img}</AuthContentRight>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    width: 100%;
    background: red;
  }
`;

const AuthContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
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
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 32px;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;
