import React from "react";
import { Container } from "@mui/material";
import SpaceXLogo from '../Logo/Logo';

import classes from "./Navbar.module.css";

const NavBar = () => {
  return (
    <Container>
      <div className={classes.topHeader}>
        <SpaceXLogo />
      </div>
    </Container>
  );
};

export default NavBar;
