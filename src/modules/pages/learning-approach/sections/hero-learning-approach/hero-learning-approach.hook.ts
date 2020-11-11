import { gql, useQuery } from '@apollo/client';

const useHeroLearningApproachData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "fCPRPqEYmHu6n2u0vxuD7") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    heroLearningApproachData: data?.asset?.url,
    heroLearningApproachLoading: loading
  };
};

export { useHeroLearningApproachData };
