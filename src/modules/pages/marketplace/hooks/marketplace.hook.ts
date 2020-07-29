import { useQuery, gql } from '@apollo/client';

const useMarketplaceData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "1Oe9SWii4bl6dU4aiQbWRD") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  return {
    marketPlaceHeroImage: data?.asset?.url
  };
};

export { useMarketplaceData };
