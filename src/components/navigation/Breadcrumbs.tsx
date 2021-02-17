import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
  crumbs: Array<{ pathname: string; label?: string }>;
}

export const Breadcrumbs = ({ crumbs }: Props) => {
  return (
    <Wrapper>
      {crumbs.map(({ pathname, label }, index) => {
        return (
          <LinkWrapper key={index}>
            <NavLinkCrumbs to={pathname}>{label}</NavLinkCrumbs>
            {index < crumbs.length - 1 ? (
              <Separator>&nbsp;/&nbsp;</Separator>
            ) : null}
          </LinkWrapper>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 24px;
`;

const LinkWrapper = styled.span``;

const NavLinkCrumbs = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.red};
  &:hover {
    text-decoration: underline;
    &:last-child {
      text-decoration: none;
    }
  }
`;

const Separator = styled.span`
  color: ${({ theme }) => theme.colors.grey};
`;
