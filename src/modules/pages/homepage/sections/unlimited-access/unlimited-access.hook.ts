/*
 * Unlimited access data
 */

import { useTranslation } from 'react-i18next';

export type CardType = {
  type: 'text' | 'button';
  title?: string;
  description?: string;
  highlighted?: string;
  buttonText?: string;
  navTo?: string;
};

const useUnlimitedData = () => {
  const { t } = useTranslation();
  const cards: CardType[] = [
    {
      type: 'text',
      title: t('home.unlimited-access.item-one.title'),
      description: t('home.unlimited-access.card-one.description'),
      highlighted: t('home.unlimited-access.card-one.highlighted')
    },
    {
      type: 'text',
      title: t('home.unlimited-access.item-two.title'),
      description: t('home.unlimited-access.card-two.description'),
      highlighted: t('home.unlimited-access.card-two.description')
    },
    {
      type: 'text',
      title: t('home.unlimited-access.item-three.title'),
      description: '',
      highlighted: t('home.unlimited-access.card-three.highlighted')
    },
    {
      type: 'text',
      title: t('home.unlimited-access.item-four.title'),
      description: t('home.unlimited-access.card-four.description'),
      highlighted: t('home.unlimited-access.card-four.highlighted')
    },
    {
      type: 'button',
      title: t('home.unlimited-access.card-five.title'),
      buttonText: t('home.unlimited-access.button-text'),
      navTo: ''
    },
    {
      type: 'button',
      title: t('home.unlimited-access.card-six.title'),
      buttonText: t('home.unlimited-access.button-text'),
      navTo: ''
    }
  ];

  return { cards };
};

export { useUnlimitedData };
