const useAboutMenuData = () => {
  const links = [
    {
      name: 'Contact',
      to: '/contact-us'
    },
    {
      name: 'Our story',
      to: '/about-us'
    },
    {
      name: 'Program-partnership',
      to: '/course-partnership'
    },
    {
      name: 'Jobs',
      to: '/jobs'
    }
  ];
  return links;
};

export { useAboutMenuData };
