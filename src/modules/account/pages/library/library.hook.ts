import { navigate } from '@router/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useLibraryData = () => {
  const dispatch = useDispatch();

  /**
   * Navigation
   */
  const navigation = [
    { label: 'Purchased Books', to: '/purchased' },
    { label: 'Wishlist', to: '/wishlist', withIcon: true }
  ];

  /**
   * TODO possible can be done better
   */
  useEffect(() => {
    // dispatch(navigate('/account/library/purchased'));
  }, []);

  return { navigation };
};

export { useLibraryData };
