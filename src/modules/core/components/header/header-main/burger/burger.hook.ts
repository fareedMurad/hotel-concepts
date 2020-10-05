import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useBurgerData = () => {
  const { authorized } = useSelector((state: State) => state.auth);
  const accountLinks = [
    {
      name: 'my Account',
      link: '/account/profile'
    },
    {
      name: 'my Programs',
      link: '/account/programs/purchased'
    },
    {
      name: 'my Library',
      link: '/account/library/purchased'
    },
    {
      name: 'my Subscriptions',
      link: '/account/subscription'
    }
  ];
  const links = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Programs',
      link: '/programs-catalogue/2FLQCegBLgDC7z3wAFrc2h'
    },
    {
      name: 'Education',
      link: '/learning-approach'
    },
    {
      name: 'Companies',
      link: '/for-companies'
    },
    {
      name: 'Jobs',
      link: '/jobs'
    },
    {
      name: 'Insights',
      link: '/insights'
    }
  ];
  return { links, authorized, accountLinks };
};

export { useBurgerData };
