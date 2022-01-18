import { gql } from "@apollo/client";
import client from './apolloClients';
import { Container, Grid, Typography } from "@mui/material";
import Error from "../components/Error/Error";
import Loader from "../components/Loader/Loader";
import HomeFeed from "../components/HomeFeed/HomeFeed";

export default function PastLaunches({ launches }) {
  return (
    <>
      <Container sx={{ pt: 3, pb: 4 }}>
        <Typography align="center" color="primary" variant="h3">
          Past Missions
        </Typography>
        <Grid container spacing={2} mt={2}>
          <HomeFeed launches={launches} />
        </Grid>
      </Container>
    </>
  );
}

export async function getStaticProps() { 
  const { loading, error, data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 30) {
          mission_name
          launch_site {
            site_name_long
          }
          launch_year
          launch_date_utc
          links {
            flickr_images
          }
          id
          rocket {
            rocket_name
            rocket {
              id
            }
          }
        }
      }
    `,
  });

  if (loading) return <Loader error={error} />;
  if (error) return <Error error={error} />;

  const launches = data.launchesPast.filter(
    (launch) => launch.links.flickr_images.length > 0
  );

  return {
    props: {
      launches: launches,
    },
  };
}
