const useJobsListData = () => {
  // add useeffect, fetch vacancies set them to store, and return from redux array
  const filters = [
    { id: 1, title: 'All', count: 5 },
    { id: 2, title: 'Marketing', count: 2 },
    { id: 3, title: 'Media', count: 1 },
    { id: 4, title: 'Finance', count: 1 },
    { id: 5, title: 'Managment', count: 1 }
  ];
  const vacancies = [
    {
      id: 1,
      title: 'Full time',
      description: 'Marketing Manager',
      specialization: 'Marketing',
      location: 'New York, USA'
    },
    {
      id: 2,
      title: 'Full time',
      description: 'Media Manager',
      specialization: 'Media',
      location: 'Hamburg, Germany'
    },
    {
      id: 3,
      title: 'Full time',
      description: 'Finance Manager',
      specialization: 'Finance',
      location: 'Madrid, Spain'
    },
    {
      id: 4,
      title: 'Full time',
      description: 'Community Manager',
      specialization: 'Managment',
      location: 'Kiev, Ukraine'
    },
    {
      id: 5,
      title: 'Full time',
      description: 'Marketing Manager',
      specialization: 'Marketing',
      location: 'Moscow, Russia'
    }
  ];
  return { filters, vacancies };
};

export { useJobsListData };
