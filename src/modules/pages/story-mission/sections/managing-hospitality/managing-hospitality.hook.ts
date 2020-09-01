import { useTranslation } from 'react-i18next';

const useManagingHospitalityData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('story-mission.managing-hospitality.cards.card1.title'),
      subtitle: t('story-mission.managing-hospitality.cards.card1.sub-title'),
      description: t(
        'story-mission.managing-hospitality.cards.card1.description'
      )
    },
    {
      id: 2,
      title: t('story-mission.managing-hospitality.cards.card2.title'),
      subtitle: t('story-mission.managing-hospitality.cards.card2.sub-title'),
      description: t(
        'story-mission.managing-hospitality.cards.card2.description'
      )
    },
    {
      id: 3,
      title: t('story-mission.managing-hospitality.cards.card3.title'),
      subtitle: t('story-mission.managing-hospitality.cards.card3.sub-title'),
      description: t(
        'story-mission.managing-hospitality.cards.card3.description'
      )
    }
  ];

  return { data };
};

export { useManagingHospitalityData };
