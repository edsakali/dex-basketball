import { FC } from "react";
import styled from "styled-components";

type Props = {
  titleText: string;
  img: string;
};

export const AuthLayout: FC<Props> = ({ titleText, img, children }) => {
  return (
    <LayoutWrapper>
      <AuthContentLeft>
        <WrapperTitle>
          <Title>{titleText}</Title>
        </WrapperTitle>
        {children}
      </AuthContentLeft>
      <AuthContentRight>
        <Img src={img} alt="basket1" />
      </AuthContentRight>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 0.75fr 1fr;
    width: 100%;
  }
`;

const AuthContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 100%;
`;

const WrapperTitle = styled.div`
  max-width: 366px;
  width: 100%;
  margin-bottom: 32px;
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 36px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const AuthContentRight = styled.div`
  background: ${({ theme }) => theme.colors.lightBlue};
  display: none;
  height: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Img = styled.img`
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
`;
