import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./Logo";
import NavigatonMenu from "./NavigationMenu";

const NavBarMenuAndLogo = () => {
  return (
    <Navbar expand="lg" bg="light">
      <Logo />
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <NavigatonMenu />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenuAndLogo;
