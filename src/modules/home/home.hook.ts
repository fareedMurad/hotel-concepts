const useHomeData = () => {
  const navigation = [
    { id: 1, caption: 'Home', to: '/' },
    { id: 2, caption: 'Uikit', to: '/uikit' },
    { id: 3, caption: 'Auth', to: '/auth' },
    { id: 4, caption: 'Profile', to: '/profile' }
  ];

  return { navigation };
};

export { useHomeData };
