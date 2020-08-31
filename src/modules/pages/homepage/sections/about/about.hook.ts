import { useTranslation } from 'react-i18next';

const useAboutData = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t('home.about.card-one.title'),
      description: t('home.about.card-one.description')
    },
    {
      title: t('home.about.card-two.title'),
      description: t('home.about.card-two.description')
    },
    {
      title: t('home.about.card-three.title'),
      description: t('home.about.card-three.description')
    }
  ];

  return { data };
};

export { useAboutData };
