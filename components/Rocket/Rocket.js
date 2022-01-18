import React from "react";
import { Container, Typography } from "@mui/material";

import classes from "./Rocket.module.css";

const Rocket = ({ rocket }) => {
  // const history = useHistory();
  return (
    <Container sx={{ pt: 3, pb: 4 }}>
      <Typography align="center" color="primary" variant="h3" mb={5}>
        {rocket.name.toUpperCase()}
      </Typography>
      <Typography paragraph color="primary">
        {rocket.description}
      </Typography>
      <Typography paragraph color="primary">
        Country: {rocket.country}
      </Typography>
      <Typography paragraph color="primary">
        First flight: {rocket.first_flight}
      </Typography>
    </Container>
  );
};

export default Rocket;
