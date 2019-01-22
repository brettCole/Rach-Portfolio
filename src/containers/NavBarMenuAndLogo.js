import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "../components/Logo";
import NavigatonMenu from "../components/NavigationMenu";

const NavBarMenuAndLogo = () => {
  return (
    <Navbar expand="lg">
      <Logo />
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <NavigatonMenu />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarMenuAndLogo;
