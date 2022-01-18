import React from "react";
import { useRouter } from 'next/router';

import Link from "next/link";
// import { useRouter } from 'next-router';

import classes from "./HomeFeed.module.css";

import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

const SingleCard = ({
  name,
  launchYear,
  imgUrl,
  description,
  linkpage,
  rocketId,
}) => {

  const router = useRouter();

  function showDetailHandler() {
    router.push('/' + rocketId);
  }

  return (
    <Card sx={{ mx: 1, mb: 2 }}>
      <CardMedia
        component="img"
        height="170"
        image={`${imgUrl}`}
        alt="green iguana"
      />
      <CardContent className={classes.cardDesc}>
        <Typography paragraph>{launchYear}</Typography>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className ={classes.rocketLink}>
        <button onClick={showDetailHandler}>
          View Rocket Details
        </button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
