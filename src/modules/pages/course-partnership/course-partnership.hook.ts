import { useTranslation } from 'react-i18next';

const useCoursePartnershipHook = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      id: 1,
      title: t('course-partnership.how-become-partner.cards.card1.title'),
      description: t(
        'course-partnership.how-become-partner.cards.card1.description'
      )
    },
    {
      id: 2,
      title: t('course-partnership.how-become-partner.cards.card2.title'),
      description: t(
        'course-partnership.how-become-partner.cards.card2.description'
      )
    },
    {
      id: 3,
      title: t('course-partnership.how-become-partner.cards.card3.title'),
      description: t(
        'course-partnership.how-become-partner.cards.card3.description'
      )
    },
    {
      id: 4,
      title: t('course-partnership.how-become-partner.cards.card4.title'),
      description: t(
        'course-partnership.how-become-partner.cards.card4.description'
      )
    }
  ];
  return { cardsData };
};

export { useCoursePartnershipHook };
