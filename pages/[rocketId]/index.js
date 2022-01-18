import React from "react";
import { useRouter } from 'next/router';

import { gql, useQuery } from "@apollo/client";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import Rocket from "../../components/Rocket/Rocket";

const GET_ROCKET_INFO = gql`
  query GET_ROCKET_INFO($rocketId: ID!) {
    rocket(id: $rocketId) {      
      name
      description
      company
      country
      first_flight
    }
  }
`;

const RocketPage = () => {
  const router = useRouter();
  const rocketId = router.query.rocketId;

  const { data, loading, error } = useQuery(GET_ROCKET_INFO, {
    variables: { rocketId },
  });

  if (loading) return <Loader error={error} />;
  if (error) return <Error error={error} />;

  return <Rocket rocket={{ ...data.rocket, id: rocketId }} />;
};

export default RocketPage;