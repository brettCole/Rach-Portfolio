import React from "react";
import { Nav } from "react-bootstrap";

const NavigationMenu = () => {
  return (
    <Nav className="justify-content-end" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/work">Work</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavigationMenu;
