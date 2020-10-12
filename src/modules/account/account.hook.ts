import { State } from '@app/redux/state';
import { userInfo } from 'os';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';

const useAccountData = () => {
  const { user } = useSelector((state: State) => state.auth);

  const emailVerified = user ? user.verified : false;

  const libraryRoute = useRouteMatch('/account/library');
  const programsRoute = useRouteMatch('/account/programs');

  const navigation = [
    { caption: 'My account', to: '/account/profile' },
    { caption: 'My subscription', to: '/account/subscription' },
    {
      caption: 'My Library',
      to: '/account/library/purchased',
      active: libraryRoute?.path?.length > 0
    },
    {
      caption: 'Programs',
      to: '/account/programs/purchased',
      active: programsRoute?.path?.length > 0
    }
  ];

  return { navigation, verified: emailVerified };
};

export { useAccountData };
