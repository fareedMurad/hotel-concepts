import { fetchProgramsWishlist } from '@app/redux/account';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useWishlistData = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state: State) => state.programs);

  /**
   * On mount fetch wishlist
   */
  useEffect(() => {
    dispatch(fetchProgramsWishlist());
  }, []);

  return { wishlist };
};

export { useWishlistData };
