import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { authSelector, logout } from "../../modules/auth/authSlice";
import { useSelector } from "react-redux";
import { pathList } from "../../routers/pathList";
import { ReactComponent as OutPutIcon } from "../../assets/images/icons/output.svg";
import { ReactComponent as TeamsIcon } from "../../assets/images/icons/teams.svg";
import { ReactComponent as PlayersIcon } from "../../assets/images/icons/players.svg";
import { ReactComponent as AccountIcon } from "../../assets/images/icons/accountIcon.svg";

interface Props {
  toggleSidebar: boolean;
}

export const Sidebar = ({ toggleSidebar }: Props) => {
  const dispatch = useAppDispatch();
  const { user } = useSelector(authSelector);

  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <SidebarContainer visible={toggleSidebar}>
      <Nav>
        <UserAccount>
          <UserImg />
          {user && <UserName>{user.name}</UserName>}
        </UserAccount>
        <NavLinkItem to={pathList.content.teams}>
          <TeamsIcon />
          <LinkText>Teams</LinkText>
        </NavLinkItem>
        <NavLinkItem to={pathList.content.players}>
          <PlayersIcon />
          <LinkText> Players</LinkText>
        </NavLinkItem>
      </Nav>
      <NavLinkItem
        to={pathList.auth.login}
        onClick={handleSignOut}
        primary="true"
      >
        <OutPutIcon />
        <LinkText>Sign out</LinkText>
      </NavLinkItem>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 201px;
  position: absolute;
  top: 62px;
  left: ${({ visible }) => (visible ? 0 : "-100%")};
  transition: left 0.5s ease;
  height: calc(100vh - 62px);
  padding: 0 0 27px 0;
  background: #ffffff;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    transition: none;
    max-width: 140px;
    padding: 32px 0 32px 0;
    height: calc(100vh - 80px);
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    align-items: center;
  } ;
`;

const UserAccount = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  margin-bottom: 24px;
  padding-left: 20px;
  border-bottom: 0.5px solid #9c9c9c;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    display: none;
  }
`;

const UserName = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
`;

const UserImg = styled(AccountIcon)`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const NavLinkItem = styled(NavLink)<{
  primary?: string;
}>`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin-bottom: ${({ primary }) => (primary ? 0 : "30px")};
  padding-left: 20px;
  color: ${({ primary, theme }) =>
    primary ? theme.colors.lightestRed : theme.colors.lightGrey};

  &.active {
    color: ${({ theme }) => theme.colors.red};

    svg {
      path {
        fill: ${({ theme }) => theme.colors.red};
      }
    }
  }

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 0;
  }
`;

const LinkText = styled.p`
  margin: 0 0 0 8px;
  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    margin: 4px 0 0 0;
  } ;
`;
