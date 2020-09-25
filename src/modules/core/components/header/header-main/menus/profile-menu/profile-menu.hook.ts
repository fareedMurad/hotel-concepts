const useProfileMenuData = () => {
  const links = [
    {
      title: 'my Account',
      to: '/account/profile'
    },
    {
      title: 'my Subscription',
      to: '/account/subscription'
    },
    {
      title: 'my Library',
      to: '/account/library/purchased'
    },
    {
      title: 'my Programs',
      to: '/account/programs/purchased'
    }
  ];
  return { links };
};

export { useProfileMenuData };
