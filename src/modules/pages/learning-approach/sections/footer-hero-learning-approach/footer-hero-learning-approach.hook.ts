import { gql, useQuery } from '@apollo/client';

const useFooterHeroLearningApproachData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "Uk2eJ9BZBP50u1XFFhR3u") {
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
