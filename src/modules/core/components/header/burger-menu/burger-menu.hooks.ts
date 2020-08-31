import { useTranslation } from 'react-i18next';
const useMenuData = () => {
  const { t } = useTranslation();
  const mainLinks = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Online Programs',
      path: '/'
    },
    {
      name: 'Insights',
      path: '/insights'
    }
  ];

  const pagesLinks = [
    {
      name: t('header.header-secondary.link-one'),
      path: '/contributors'
    },
    {
      name: t('header.header-secondary.link-two'),
      path: '/learning-approach'
    },
    {
      name: t('header.header-secondary.link-three'),
      path: '/insights'
    },
    {
      name: t('header.header-secondary.link-four'),
      path: '/contact-us'
    }
  ];
  return { mainLinks, pagesLinks };
};

export { useMenuData };
