const useProgramsMenuData = () => {
  const programs = [
    {
      name: 'Focused Programs',
      description:
        'develop in-depth expertise in areas that are critical for you',
      path: '/programs-catalogue/focused-programs'
    },
    {
      name: 'Digital Transformation',
      description:
        'use exponentially improving technologies to transform your hospitality business',
      path: '/programs-catalogue/digital-transformation'
    },
    {
      name: 'Essential Skills Programs ',
      description: 'gain the skills and confidence to succeed',
      path: '/programs-catalogue/essential-skills'
    },
    {
      name: 'Leadership Programs',
      description: 'enable the full potential in others and in yourself',
      path: '/programs-catalogue/leadership'
    },
    {
      name: 'Post-Covid',
      description: 'manage the crisis efficiently',
      path: '/programs-catalogue/post-covid'
    }
  ];
  return { programs };
};

export { useProgramsMenuData };
