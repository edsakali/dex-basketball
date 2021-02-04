import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 16px 0;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin: 32px 0;
  }
`;
