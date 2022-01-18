import React from "react";
import { Grid } from "@mui/material";
import SingleCard from "./SingleCard";

const HomeSingle = ({ launches }) => {
  return launches.map((launch) => (
    <Grid key={launch.id} item xs={12} md={6} lg={4}>
      <SingleCard
        name={launch.mission_name}
        link={launch.links.article_link}
        launchYear={launch.launch_year}
        imgUrl={launch.links.flickr_images[0]}
        description={launch.launch_site.site_name_long}
        rocketId={launch.rocket.rocket.id}
      />
    </Grid>
  ));
};

export default HomeSingle;
