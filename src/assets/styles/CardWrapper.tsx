import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    grid-template-columns: repeat(3, calc((100% - 48px) / 3));
    gap: 24px;
    margin: 32px 0;
  }
`;
