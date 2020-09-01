import { useTranslation } from 'react-i18next';

const useHowWeWork = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      id: 1,
      title: t('for-companies.how-we-work.cards.card1.title'),
      text: t('for-companies.how-we-work.cards.card1.text')
    },
    {
      id: 2,
      title: t('for-companies.how-we-work.cards.card2.title'),
      text: t('for-companies.how-we-work.cards.card2.text')
    },
    {
      id: 3,
      title: t('for-companies.how-we-work.cards.card3.title'),
      text: t('for-companies.how-we-work.cards.card3.text')
    }
  ];
  return cardsData;
};

export { useHowWeWork };
