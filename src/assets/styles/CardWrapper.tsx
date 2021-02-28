import styled from "styled-components";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc((100% - 12px) / 2));
  gap: 12px;
  margin: 16px 0;

  @media screen and ${({ theme }) => theme.deviceSize.laptop} {
    grid-template-columns: repeat(3, calc((100% - 48px) / 3));
    gap: 24px;
    margin: 32px 0;
  }
`;
