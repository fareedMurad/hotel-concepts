const useHomeData = () => {
  const navigation = [
    { id: 1, title: 'Market', to: '/market' },
    { id: 2, title: 'Cordie Insights', to: '/insights' },
    { id: 3, title: 'Consulting', to: '/consulting' },
    { id: 4, title: 'For Companies', to: '/for-companies' }
  ];
  return { navigation };
};

export { useHomeData };
