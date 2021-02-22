import styled from "styled-components";
import { NavLink } from "react-router-dom";

type PropsAuthNavigation = {
  text: string;
  path: string;
  actionText: string;
};

export const AuthNavigation = ({
  text,
  path,
  actionText,
}: PropsAuthNavigation) => {
  return (
    <AuthNavWrapper>
      <AuthTextNav>{text}</AuthTextNav>
      <AuthNavLink to={path}>{actionText}</AuthNavLink>
    </AuthNavWrapper>
  );
};

const AuthNavWrapper = styled.div`
  display: flex;
  margin-top: 24px;
`;

const AuthTextNav = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-right: 4px;
`;

const AuthNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.red};
  text-decoration: underline;
`;
