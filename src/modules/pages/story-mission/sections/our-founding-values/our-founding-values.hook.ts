import { useTranslation } from 'react-i18next';

const useOurFoundingValuesData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('story-mission.our-founding.cards.card1.title'),
      picture: 'card-1-image',
      description: t('story-mission.our-founding.cards.card1.description')
    },
    {
      id: 2,
      title: t('story-mission.our-founding.cards.card2.title'),
      picture: 'card-2-image',
      description: t('story-mission.our-founding.cards.card2.description')
    },
    {
      id: 3,
      title: t('story-mission.our-founding.cards.card3.title'),
      picture: 'card-3-image',
      description: t('story-mission.our-founding.cards.card3.description')
    },
    {
      id: 4,
      title: t('story-mission.our-founding.cards.card3.title'),
      picture: 'card-4-image',
      description: t('story-mission.our-founding.cards.card3.description')
    }
  ];

  return { data };
};

export { useOurFoundingValuesData };
