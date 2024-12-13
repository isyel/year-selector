import React from "react";
import { MemoryRouter } from "react-router";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>{children}</MemoryRouter>
);

export default Layout;
