import { gql, useQuery } from '@apollo/client';

const useFooterHeroLearningApproachData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "44Gqkfs583QyIA3apzJCfF") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    footerHeroImage: data?.asset?.url
  };
};

export { useFooterHeroLearningApproachData };
