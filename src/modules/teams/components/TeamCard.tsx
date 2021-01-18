import styled from "styled-components";

export const TeamCard = () => (
  <CardItem>
    <CardImg />
    <CardInfo />
  </CardItem>
);

const CardItem = styled.div`
  display: grid;
  grid-template: 1fr 42.22% /1fr;
  background: red;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    grid-template: 1fr 26.32% /1fr;
    border-radius: 4px;
  }
`;

const CardImg = styled.div`
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%); ;
`;
const CardInfo = styled.div`
  background: #303030;
`;
