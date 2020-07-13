const useHeaderData = () => {
  const navigation = [
    { id: 1, title: 'Corporate Training', to: '/' },
    { id: 2, title: 'Resources', to: '/' },
    { id: 3, title: 'Mentors', to: '/contributors' }
  ];
  return { navigation };
};

export { useHeaderData };
