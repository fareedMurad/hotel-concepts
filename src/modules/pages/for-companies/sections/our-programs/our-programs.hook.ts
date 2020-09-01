import { useTranslation } from 'react-i18next';

const useOurProgramsData = () => {
  const { t } = useTranslation();
  const cardsData = [
    {
      id: 1,
      count: '1.0',
      title: t('for-companies.our-programs.cards.card1.title'),
      text: t('for-companies.our-programs.cards.card1.text')
    },
    {
      id: 2,
      count: '2.0',
      title: t('for-companies.our-programs.cards.card2.title'),
      text: t('for-companies.our-programs.cards.card2.text')
    },
    {
      id: 3,
      count: '3.0',
      title: t('for-companies.our-programs.cards.card3.title'),
      text: t('for-companies.our-programs.cards.card3.text')
    },
    {
      id: 4,
      count: '4.0',
      title: t('for-companies.our-programs.cards.card4.title'),
      text: t('for-companies.our-programs.cards.card4.text')
    },
    {
      id: 5,
      count: '5.0',
      title: t('for-companies.our-programs.cards.card5.title'),
      text: t('for-companies.our-programs.cards.card5.text')
    }
  ];
  return cardsData;
};

export { useOurProgramsData };
