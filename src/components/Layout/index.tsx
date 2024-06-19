import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: ReactNode,
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
export default Layout;