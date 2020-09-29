import { navigate } from '@router/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useMyProgramsData = () => {
  const dispatch = useDispatch();

  /**
   * Navigation
   */
  const navigation = [
    { label: 'Purchased Programs', to: '/purchased' },
    { label: 'Wishlist', to: '/wishlist', withIcon: true }
  ];

  /**
   * TODO possible can be done better
   */
  useEffect(() => {
    // dispatch(navigate('/account/programs/purchased'));
  }, []);

  return { navigation };
};

export { useMyProgramsData };
