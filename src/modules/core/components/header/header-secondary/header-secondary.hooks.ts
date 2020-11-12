import { useTranslation } from 'react-i18next';
const useMenuData = () => {
  const { t } = useTranslation();

  const pagesLinks = [
    {
      name: t('header.header-secondary.link-one'),
      path: '/contributors'
    },
    {
      name: t('header.header-secondary.link-three'),
      path: '/course-partnership'
    },

    {
      name: t('header.header-secondary.link-four'),
      path: '/contact-us'
    }
  ];
  return { pagesLinks };
};

export { useMenuData };
