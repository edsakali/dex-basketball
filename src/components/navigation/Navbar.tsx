import { FC, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/icon/logo (1).png";

export const Navbar: FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const handleClick = () => setClick(!click);

  return (
    // <Nav>
    <NavbarContainer>
      <NavLogo to="/">
        <img src={Logo} alt="logo" />
      </NavLogo>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
      {/* <UserAccount>
          <UserName>John Smith</UserName>
          <UserImg />
        </UserAccount> */}
    </NavbarContainer>
    // </Nav>
  );
};

// const Nav = styled.nav`
//   background: green;
//   height: 62px;
//   /* display: flex;
//   justify-content: center;
//   align-items: center; */
//   position: sticky;
//   top: 0;
//   z-index: 999;
// `;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #000;
  height: 62px;

  @media screen and (min-width: 960px) {
    width: 100%;
    margin: 0 auto;
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
    height: 80px;
  }
`;

const NavLogo = styled(NavLink)`
  justify-self: center;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const MobileIcon = styled.div`
  color: #dadada;
  display: block;
  position: absolute;
  top: 0px;
  left: 45px;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;
