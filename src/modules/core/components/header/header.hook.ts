const useHeaderData = () => {
  const navigation = [
    { id: 1, title: 'Corporate Training', to: '/for-companies' },
    { id: 2, title: 'Resources', to: '/insights' },
    { id: 3, title: 'Mentors', to: '/contributors' }
  ];
  return { navigation };
};

export { useHeaderData };
