const useAccountData = () => {
  const navigation = [
    { caption: 'My account', to: '/account/profile' },
    { caption: 'My subscription', to: '/account/subscription' },
    { caption: 'My Library', to: '/account/library/purchased' },
    { caption: 'Programs', to: '/account/programs/purchased' }
  ];

  return { navigation };
};

export { useAccountData };
