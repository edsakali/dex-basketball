import { FC, useState } from "react";
import { AppHeader } from "../AppHeader";
import { Sidebar } from "../navigation/Sidebar";
import styled from "styled-components";

export const AppLayout: FC = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar((prevState) => !prevState);
  };

  return (
    <Layout>
      <AppHeader
        toggleSidebar={toggleSidebar}
        onToggleSidebar={handleToggleSidebar}
      />
      <ContentWrapper>
        <Sidebar toggleSidebar={toggleSidebar} />
        {toggleSidebar && <BackDrop onClick={handleToggleSidebar} />}
        <Content>{children}</Content>
      </ContentWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  background: ${({ theme }) => theme.colors.lightestGrey1};
  height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Content = styled.div`
  padding: 16px 0;
  width: 100%;
  height: calc(100vh - 62px);
  overflow-y: auto;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    padding: 32px 80px;
    height: calc(100vh - 80px);
  } ;
`;

const BackDrop = styled.div`
  z-index: 150;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media screen and ${({ theme }) => theme.deviceSize.tablet} {
    display: none;
  }
`;
