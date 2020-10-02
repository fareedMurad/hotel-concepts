import { useHistory } from 'react-router';

const useLibraryData = () => {
  const {
    location: { pathname }
  } = useHistory();
  const matchWishlist = pathname == '/account/library/wishlist';

  /**
   * Navigation
   */
  const navigation = [
    { label: 'Purchased Books', to: 'purchased' },
    { label: 'Wishlist', to: 'wishlist', withIcon: true }
  ];

  return { navigation, matchWishlist };
};

export { useLibraryData };
