import { gql, useQuery } from '@apollo/client';

const useHeroLearningApproachData = () => {
  const GET_REDUCED_IMAGE = gql`
    {
      asset(id: "33zlz89QUmqCUxfAEvgSFu") {
        url
      }
    }
  `;

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "wsal0kfBcI5dB1icnLUQu") {
        url
      }
    }
  `;
  const { data: reducedImage } = useQuery(GET_REDUCED_IMAGE);

  const { data: mainImage } = useQuery(GET_HERO_IMAGE);

  return {
    heroLearningApproachData: mainImage?.asset?.url,
    reducedImage: reducedImage?.asset?.url
  };
};

export { useHeroLearningApproachData };
