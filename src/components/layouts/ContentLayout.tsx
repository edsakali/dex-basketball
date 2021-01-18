import styled from "styled-components";
import { FC } from "react";

export const ContentLayout: FC = ({ children }) => (
  <CardsSection>
    <CardsHead></CardsHead>
    <CardsContainer>{children}</CardsContainer>
    <CardsFooter></CardsFooter>
  </CardsSection>
);

const CardsSection = styled.section`
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
  }
`;
const CardsHead = styled.header`
  background: aqua;
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  } ;
`;
const CardsFooter = styled.footer`
  background: bisque;
`;
