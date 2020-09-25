import { fetchLibraryWishlist } from '@app/redux/account';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useWishlistData = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state: State) => state.library);

  /**
   * On mount fetch wishlist
   */
  useEffect(() => {
    dispatch(fetchLibraryWishlist());
  }, []);

  return { wishlist };
};

export { useWishlistData };
