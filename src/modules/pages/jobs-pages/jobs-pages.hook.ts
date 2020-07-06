export const useJobsPages = () => {
  const filters = [
    { id: 1, title: 'All', count: 256 },
    { id: 2, title: 'Marketing', count: 12 },
    { id: 3, title: 'Media', count: 24 },
    { id: 4, title: 'Finance', count: 4 },
    { id: 5, title: 'Managment', count: 4 }
  ];
  const vacancies = [
    { id: 1, title: 'Full time', description: 'Community Manager' },
    { id: 2, title: 'Full time', description: 'Community Manager' },
    { id: 3, title: 'Full time', description: 'Community Manager' },
    { id: 4, title: 'Full time', description: 'Community Manager' },
    { id: 5, title: 'Full time', description: 'Community Manager' }
  ];
  return { filters, vacancies };
};
