const useProfileData = () => {
  const navigation = [
    { caption: 'User Information', to: '/profile/user-info' },
    { caption: 'Login and Security', to: '/profile/security' },
    { caption: 'Settings', to: '/profile/settings' }
  ];

  return { navigation };
};

export { useProfileData };
