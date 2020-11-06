import { State } from '@app/redux/state';
import { useSelector } from 'react-redux';

const useProfileMenuData = () => {
  const {
    auth: { authorized, user },
    cart: { showDropdown }
  } = useSelector((state: State) => state);
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
  return { links, authorized, user, showDropdown };
};

export { useProfileMenuData };
