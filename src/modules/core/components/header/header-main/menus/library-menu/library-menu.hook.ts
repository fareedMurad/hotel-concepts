import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/client';
import { useSelector } from 'react-redux';
import { State } from '@app/redux/state';

const useCorporateImage = () => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "47twvwAFXZtD82gCTCKVQi") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    corporateImage: oldSafari ? data?.asset?.url : `${data?.asset?.url}`
  };
};

const useIndividualImage = () => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';
  const GET_HERO_IMAGE = gql`
    {
      asset(id: "4ZSBUgDf6sltc51wg0D9Y1") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  return {
    individualImage: oldSafari ? data?.asset?.url : `${data?.asset?.url}`
  };
};

export { useCorporateImage, useIndividualImage };
