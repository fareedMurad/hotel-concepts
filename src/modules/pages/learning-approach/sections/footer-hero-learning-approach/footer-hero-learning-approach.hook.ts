import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useFooterHeroLearningApproachData = () => {
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);

  const oldSafari = browserName === 'Safari' && browserVersion <= '14';

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "Uk2eJ9BZBP50u1XFFhR3u") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);
  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return {
    footerHeroImage: imageUrl
  };
};

export { useFooterHeroLearningApproachData };
