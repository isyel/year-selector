import React from "react";
import { MemoryRouter } from "react-router";

import ModalProvider from "../src/components/Modal/ModalProvider";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <MemoryRouter>
    <ModalProvider>{children}</ModalProvider>
  </MemoryRouter>
);

export default Layout;
