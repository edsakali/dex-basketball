import { FC, useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { authSelector } from "../../modules/auth/authSlice";

export const Navbar: FC = () => {
  const [click, setClick] = useState<boolean>(false);
  const { user } = useSelector(authSelector);
  const handleClick = () => setClick(!click);

  return (
    <NavbarContainer>
      <NavLogo to="/">
        <ImgNavLink src={Logo} alt="logo" />
      </NavLogo>
      <UserAccount>
        {user && <UserName>{user.name}</UserName>}
        <UserImg />
      </UserAccount>
      <MobileIcon onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </MobileIcon>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 1px 10px rgba(209, 209, 209, 0.5);
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
  display: flex;
  align-items: center;
  justify-self: center;
  width: 137px;
  height: 34px;
  cursor: pointer;
  text-decoration: none;

  @media screen and (min-width: 960px) {
    width: 191px;
    height: 48px;
  }
`;
const ImgNavLink = styled.img`
  width: 100%;
  height: 100%;
`;

const MobileIcon = styled.div`
  color: #dadada;
  display: block;
  position: absolute;
  top: 0;
  left: 45px;
  transform: translate(-100%, 60%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

const UserAccount = styled.div``;

const UserName = styled.p``;

const UserImg = styled.img``;
