import { fetchLibraryPurchased } from '@app/redux/account';
import { State } from '@app/redux/state';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const usePurchasedData = () => {
  const dispatch = useDispatch();
  const { purchased } = useSelector((state: State) => state.library);

  /**
   * On mount fetch purchased
   */
  useEffect(() => {
    dispatch(fetchLibraryPurchased());
  }, []);

  return { purchased };
};

export { usePurchasedData };
