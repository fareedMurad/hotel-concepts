const useAboutMenuData = () => {
  const aboutMenuLinks = [
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
  return { aboutMenuLinks };
};

export { useAboutMenuData };
