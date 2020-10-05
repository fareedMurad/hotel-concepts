import { useHistory } from 'react-router';

const useMyProgramsData = () => {
  const {
    location: { pathname }
  } = useHistory();
  const matchWishlist = pathname == '/account/programs/wishlist';

  /**
   * Navigation
   */
  const navigation = [
    { label: 'Purchased Programs', to: 'purchased' },
    { label: 'Wishlist', to: 'wishlist', withIcon: true }
  ];

  return { navigation, matchWishlist };
};

export { useMyProgramsData };
