import { Breadcrumbs } from "./navigation/Breadcrumbs";
import styled from "styled-components";

interface Props {
  crumbs: Array<{ pathname: string; label?: string }>;
}

export const ContentTitle = ({ crumbs }: Props) => (
  <ContentWrapper>
    <Breadcrumbs crumbs={crumbs} />
  </ContentWrapper>
);

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0;
  padding: 15px 16px;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 20px 32px;
    border-radius: 10px 10px 0 0;
  }
`;
