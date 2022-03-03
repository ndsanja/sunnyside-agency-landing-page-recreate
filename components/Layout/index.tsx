import React, { Children } from "react";
import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="relative w-full">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
