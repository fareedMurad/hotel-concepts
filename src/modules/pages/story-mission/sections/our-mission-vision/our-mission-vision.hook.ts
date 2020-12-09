import { gql, useQuery } from '@apollo/client';
import { State } from '@app/redux/state';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useOurMissionVisionData = () => {
  const { t } = useTranslation();
  const {
    general: {
      browserVersion: { name: browserName, version: browserVersion }
    }
  } = useSelector((state: State) => state);
  const oldSafari = browserName === 'Safari' && browserVersion <= '14';
  const programs = [
    {
      id: 1,
      rate: '1.0',
      caption: t('story-mission.kordie-impact.list.item1.caption'),
      description: t('story-mission.kordie-impact.list.item1.description'),
      link: '/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h',
      button: 'Explore programs'
    },
    {
      id: 2,
      rate: '2.0',
      caption: t('story-mission.kordie-impact.list.item2.caption'),
      description: t('story-mission.kordie-impact.list.item2.description'),
      link: '/contributors',
      button: 'Meet the experts'
    },
    {
      id: 3,
      rate: '3.0',
      caption: t('story-mission.kordie-impact.list.item3.caption'),
      description: t('story-mission.kordie-impact.list.item3.description'),
      link: '/for-companies',
      button: 'Discover offers'
    }
  ];

  const GET_HERO_IMAGE = gql`
    {
      asset(id: "793M49f7fryCPIowy5PuJA") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  const imageUrl = oldSafari ? data?.asset?.url : `${data?.asset?.url}?fm=webp`;

  return {
    programs,
    ourMissionImage: imageUrl
  };
};

export { useOurMissionVisionData };
