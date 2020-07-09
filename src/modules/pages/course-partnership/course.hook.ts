const useCourseHook = () => {
  const cardsData = [
    {
      id: 1,
      title: 'Academic Institutions',
      description: 'Providing or aiming to provide hospitality degrees.'
    },
    {
      id: 2,
      title: 'Specialist Organisations',
      description: 'Organisations providing services for hospitality .'
    },
    {
      id: 3,
      title: 'Hospitality  Professionals',
      description:
        'Specialist with high-profile expertise in different hospitality segments.'
    },
    {
      id: 4,
      title: 'Industry Leaders',
      description: 'Hotels and resorts with higher output.'
    }
  ];
  return { cardsData };
};

export { useCourseHook };
