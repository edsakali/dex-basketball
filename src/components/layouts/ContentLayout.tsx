import { FC, useState } from "react";
import { Navbar } from "../navigation/Navbar";
import { Sidebar } from "../navigation/Sidebar";
import styled from "styled-components";

export const ContentLayout: FC = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar((prevState) => !prevState);
  };

  return (
    <Layout>
      <Navbar
        toggleSidebar={toggleSidebar}
        onToggleSidebar={handleToggleSidebar}
      />
      <Sidebar toggleSidebar={toggleSidebar} />
      {children}
    </Layout>
  );
};

const Layout = styled.div`
  background: ${({ theme }) => theme.colors.lightestGrey1};
  height: 100vh;
  position: relative;
`;
