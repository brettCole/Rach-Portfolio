import React from "react";
import { Image } from "react-bootstrap";
import logo from "../images/rachel-cole-logo.svg";

const Logo = () => {
  return (
    <Image
      src={logo}
      className="mx-auto"
      style={{ width: "137px" }}
      thumbnail
    />
  );
};

export default Logo;
