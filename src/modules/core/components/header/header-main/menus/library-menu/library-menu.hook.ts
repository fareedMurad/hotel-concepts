import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';

const useCorporateImage = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "47twvwAFXZtD82gCTCKVQi") {
        url(transform: { format: WEBP })
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    corporateImage: data?.asset?.url
  };
};

const useIndividualImage = () => {
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "4ZSBUgDf6sltc51wg0D9Y1") {
        url(transform: { format: WEBP })
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    individualImage: data?.asset?.url
  };
};

export { useCorporateImage, useIndividualImage };
