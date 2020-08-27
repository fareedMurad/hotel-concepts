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

  const pagesLinks = [
    {
      name: 'Mentors&Co-authors',
      path: '/contributors'
    },
    {
      name: 'Learning Approach',
      path: '/learning-approach'
    },
    {
      name: 'Insights',
      path: '/insights'
    },
    {
      name: 'Contacts',
      path: '/contact-us'
    }
  ];
  return { mainLinks, pagesLinks };
};

export { useMenuData };
