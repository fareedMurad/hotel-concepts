import { gql, useQuery } from '@apollo/client';

const useHeroLearningApproachData = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "17ZH29S9Eo67M4Q4exNUwF") {
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
