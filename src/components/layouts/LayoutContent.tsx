import { FC } from "react";
import { Navbar } from "../navigation/Navbar";
import { Sidebar } from "../navigation/Sidebar";

export const LayoutContent: FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};
