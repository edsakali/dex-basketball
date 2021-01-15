import styled from "styled-components";
import { FC } from "react";

export const ContainerLayout: FC = ({ children }) => (
  <Container>{children}</Container>
);
const Container = styled.div`
  background: gray;
  height: calc(100vh - 62px);
  padding: 16px 12px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    margin-left: 140px;
    padding: 32px 80px;
    height: calc(100vh - 80px);
  }
`;
