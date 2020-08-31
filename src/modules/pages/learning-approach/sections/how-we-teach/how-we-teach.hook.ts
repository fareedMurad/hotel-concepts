import { useTranslation } from 'react-i18next';

const useHowWeTeachData = () => {
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      title: t('learning-approach.cards.card-one.title'),
      description: t('learning-approach.cards.card-one.description')
    },
    {
      id: 2,
      title: t('learning-approach.cards.card-two.title'),
      description: t('learning-approach.cards.card-two.description')
    },
    {
      id: 3,
      title: t('learning-approach.cards.card-three.title'),
      description: t('learning-approach.cards.card-three.description')
    },
    {
      id: 4,
      title: t('learning-approach.cards.card-four.title'),
      description: t('learning-approach.cards.card-four.description')
    },
    {
      id: 5,
      title: t('learning-approach.cards.card-five.title'),
      description: t('learning-approach.cards.card-five.description')
    },
    {
      id: 6,
      title: t('learning-approach.cards.card-six.title'),
      description: t('learning-approach.cards.card-six.description')
    },
    {
      id: 7,
      title: t('learning-approach.cards.card-seven.title'),
      description: t('learning-approach.cards.card-seven.description')
    }
  ];
  return { data };
};

export { useHowWeTeachData };
