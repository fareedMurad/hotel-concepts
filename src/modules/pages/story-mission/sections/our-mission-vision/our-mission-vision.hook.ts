import { gql, useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';

const useOurMissionVisionData = () => {
  const { t } = useTranslation();
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
      asset(id: "4wz0YIrLImvhzdTiOFfVwW") {
        url
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_HERO_IMAGE);

  return {
    programs,
    ourMissionImage: data?.asset?.url
  };
};

export { useOurMissionVisionData };
