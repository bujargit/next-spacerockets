import React from "react";
import { Container } from "@mui/material";
import SpaceXSvgLogo from "./../Logo/Logo";

import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <Container>
      <div className={classes.topHeader}>
        <SpaceXSvgLogo />
      </div>
    </Container>
  );
};

export default NavBar;
