import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useProfileMenuData = () => {
  const {
    auth: { authorized, user },
    cart: { showDropdown }
  } = useSelector((state: State) => state);
  const links = [
    {
      title: 'My Account',
      to: '/account/profile'
    },
    {
      title: 'My Subscription',
      to: '/account/subscription'
    },
    {
      title: 'My Library',
      to: '/account/library/purchased'
    },
    {
      title: 'My Programs',
      to: '/account/programs/purchased'
    }
  ];
  return { links, authorized, user, showDropdown };
};

export { useProfileMenuData };
