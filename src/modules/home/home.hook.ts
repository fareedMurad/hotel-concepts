const useHomeData = () => {
  const navigation = [
    { caption: 'Home', to: '/' },
    { caption: 'Uikit', to: '/uikit' },
    { caption: 'Auth', to: '/auth' },
    { caption: 'Profile', to: '/profile' }
  ];

  return { navigation };
};

export { useHomeData };
