const useFooterData = () => {
  const companyLinks = [
    { id: 1, caption: 'Story & Mission', to: '/' },
    { id: 2, caption: 'Learners', to: '/' },
    { id: 3, caption: 'Jobs', to: '/' },
    { id: 4, caption: 'Contacts', to: '/' },
    { id: 5, caption: 'Partnership', to: '/' }
  ];
  const weprovideLinks = [
    { id: 1, caption: 'For Companies', to: '/' },
    { id: 2, caption: 'Consulting', to: '/' },
    { id: 3, caption: 'Marketplace', to: '/' },
    { id: 4, caption: 'Insights', to: '/' }
  ];

  const moreLinks = [
    { id: 1, caption: 'Support', to: '/' },
    { id: 2, caption: 'Technology Requirements', to: '/' }
  ];

  return { companyLinks, weprovideLinks, moreLinks };
};

export { useFooterData };
