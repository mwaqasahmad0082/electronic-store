import React from "react";
import Home from "./Home";
import Contect from "./Contect";

const Layout = ({ children }) => {
  return (
    <div>
      <Home />
      {children}
      <Contect />
    </div>
  );
};

export default Layout;
