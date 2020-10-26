const useAboutMenuData = () => {
  const navigation = [
    {
      name: 'About us',
      to: '/about-us'
    },
    {
      name: 'Jobs',
      to: '/jobs'
    }
  ];

  return { navigation };
};

export { useAboutMenuData };
