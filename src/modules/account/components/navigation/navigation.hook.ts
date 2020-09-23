const useNavigationData = () => {
  const navLinks = [
    {
      number: '1.0',
      link: 'My account',
      to: '/account/profile'
    },
    {
      number: '2.0',
      link: 'My subscription',
      to: '/account/subscription'
    },
    {
      number: '3.0',
      link: 'My Library',
      to: '/account/library/purchased'
    },
    {
      number: '4.0',
      link: 'My Programs',
      to: '/account/programs'
    }
  ];
  return { navLinks };
};

export { useNavigationData };
