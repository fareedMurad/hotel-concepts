const useMenuData = () => {
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

  const secondaryLinks = [
    {
      name: 'For Corporate Clients',
      path: '/for-companies'
    },
    {
      name: 'Program-Partnership',
      path: '/course-partnership'
    },
    {
      name: 'Contributors',
      path: '/contributors'
    },
    {
      name: 'Learning Approach',
      path: '/learning-approach'
    },
    {
      name: 'Our Story',
      path: '/about-us'
    },
    {
      name: 'Jobs',
      path: '/jobs'
    },
    {
      name: 'Contacts',
      path: '/contact-us'
    }
  ];
  return { mainLinks, secondaryLinks };
};

export { useMenuData };
