const useAboutMenuData = () => {
  const aboutMenuLinks = [
    {
      name: 'About us',
      to: '/about-us'
    },
    {
      name: 'Jobs',
      to: '/jobs'
    }
  ];
  return { aboutMenuLinks };
};

export { useAboutMenuData };
